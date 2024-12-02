import React, { useState, useEffect } from "react";
import axios from "axios";
import PlaylistTable from "../components/PlaylistTable";
import styles from "./MinhasPlaylists.module.css";
import { Link } from "react-router-dom";
import { logoutUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';


function PlaylistList() {
  const [playlists, setPlaylists] = useState([]);
  const [filteredPlaylists, setFilteredPlaylists] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/playlist", {
        headers: { Authorization: token },
      })
      .then((res) => {
        setPlaylists(res.data.playlists || []);
        setFilteredPlaylists(res.data.playlists || []);
      })
      .catch((err) => {
        console.error("Erro ao buscar playlists:", err);
      });
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = playlists.filter(
      (playlist) =>
        playlist._name.toLowerCase().includes(query) ||
        playlist._description.toLowerCase().includes(query)
    );
    setFilteredPlaylists(filtered);
    setCurrentPage(0);
  };

  const handleNextPage = () => {
    if ((currentPage + 1) * itemsPerPage < filteredPlaylists.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  const startIndex = currentPage * itemsPerPage;
  const paginatedPlaylists = filteredPlaylists.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className={styles.container}>
      <div className={styles.containerPrincipal}>
        <nav className="navBarContainer">
          <ul className="menuContainer">
              <li><a href='/home'>Tudo</a></li>
              <li><a href='/musicas'>Músicas</a></li>
              <li><a href='/playlists' className="menuCheck">Playlists</a></li>
          </ul>
          <button onClick={handleLogout} className="logoutButton">
              Logout
              <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 512 512" 
                  className="logoutIcon"
              >
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"/>
              </svg>
          </button>
        </nav>
        {/* Barra de Busca */}
        <input
          type="text"
          placeholder="Pesquisar por nome ou descrição..."
          value={searchQuery}
          onChange={handleSearch}
          className={styles.searchBar}
        />

        {/* Tabela de Playlists */}
        <div>
          <div className="flex justify-content-between align-items-center">
            <h3>Todas as Playlists</h3>
            {/* Botão Ver Minhas Playlists */}
            <Link to="/minhas-playlists">
              <button className={styles.paginationButton}>
                Ver Minhas Playlists
              </button>
            </Link>
          </div>

          <table className={styles.playlistTable}>
            <thead>
              <tr>
                <th>#</th>
                <th>Imagem</th>
                <th>Nome</th>
                <th>Descrição</th>
              </tr>
            </thead>
            <tbody>
              {paginatedPlaylists.map((playlist, index) => (
                <PlaylistTable
                  key={playlist._id}
                  playlist={playlist}
                  index={startIndex + index}
                />
              ))}
            </tbody>
          </table>
        </div>

        {/* Controles de Paginação */}
        <div className={styles.paginationContainer}>
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 0}
            className={styles.paginationButton}
          >
            Anterior
          </button>
          <span className={styles.paginationInfo}>
            Página {currentPage + 1} de{" "}
            {Math.ceil(filteredPlaylists.length / itemsPerPage)}
          </span>
          <button
            onClick={handleNextPage}
            disabled={
              (currentPage + 1) * itemsPerPage >= filteredPlaylists.length
            }
            className={styles.paginationButton}
          >
            Próxima
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlaylistList;
