// import "./App.css";
import { useLocation } from "react-router-dom";
import { getUserData } from "./Firestore";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import VITE_GITHUB_TOKEN from "./token";

const LikedRepos = () => {
  const location = useLocation();
  const { userId } = location.state || {};
  const [likedRepos, setLikedRepos] = useState(null);
  const [repoDetails, setRepoDetails] = useState([]); 

  // Fetch liked repos from Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        const repos = await getUserData(userId);
        setLikedRepos(repos);
      } catch (error) {
        console.error("Error fetching liked repositories:", error);
      }
    };
    fetchData();
  }, [userId]);

  // Fetch detailed data for each repository
  useEffect(() => {
    const fetchRepoDetails = async () => {
      if (likedRepos) {
        const repoIds = likedRepos.split(" ").slice(1); 
        try {
          const details = await Promise.all(
            repoIds.map(async (repoId) => {
              const response = await fetch(`https://api.github.com/repositories/${repoId}`,{
                headers: {
                  Authorization: `token ${VITE_GITHUB_TOKEN}`,
                },
              }

              );
              if (!response.ok) {
                console.error(`Error fetching repository with ID ${repoId}: ${response.status}`);
                return null; // Skip invalid or failed responses
              }
              return response.json();
            })
          );
          setRepoDetails(details.filter((repo) => repo !== null)); 
        } catch (error) {
          console.error("Error fetching repository details:", error);
        }
      }
    };
    fetchRepoDetails();
  }, [likedRepos]);

  // Show loading state
  if (likedRepos === null || repoDetails.length === 0) {
    return <div>No Liked Repo</div>;
  }


  return (
    <div className="main-cont">
      {repoDetails.map((repoData) => {

        if (!repoData || !repoData.owner) {
          console.warn("Incomplete repo data:", repoData);
          return null;
        }

        return (
          <div className="card" key={repoData.id} style={{ width: "18rem" }}>
            {/* Repository Owner Avatar */}
            <img
              src={repoData.owner.avatar_url}
              className="card-img-top"
              alt={`${repoData.owner.login}'s avatar`}
              style={{ borderRadius: "50%", width: "100px", margin: "1rem auto" }}
            />

            <div className="card-body text-center">
              {/* Repository Name */}
              <h5 className="card-title">{repoData.name}</h5>

              {/* Owner Name */}
              <p className="card-text">Owner: {repoData.owner.login}</p>

              {/* Repository Link */}
              <a
                href={repoData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-3"
              >
                View Repository
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LikedRepos;
