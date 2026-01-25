import React, {useContext, useState, useEffect} from "react";
import "./Youtube.scss";
import {youtubeSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Youtube() {
  const {isDark} = useContext(StyleContext);
  const [videoTitles, setVideoTitles] = useState({});

  // Fetch video titles using oEmbed API
  useEffect(() => {
    if (!youtubeSection || !youtubeSection.display || !youtubeSection.videos) {
      return;
    }

    youtubeSection.videos.forEach((video, index) => {
      const videoUrl = typeof video === 'string' ? video : video.url;
      const videoTitle = typeof video === 'object' ? video.title : '';
      
      if (!videoTitle && videoUrl) {
        const videoId = videoUrl.match(/[?&]v=([^&]+)/)?.[1];
        if (videoId) {
          fetch(`https://noembed.com/embed?dataType=json&url=${encodeURIComponent(videoUrl)}`)
            .then(res => res.json())
            .then(data => {
              if (data.title) {
                setVideoTitles(prev => ({
                  ...prev,
                  [index]: data.title
                }));
              }
            })
            .catch(err => {
              console.error(`Failed to fetch title for video ${index}:`, err);
            });
        }
      } else if (videoTitle) {
        setVideoTitles(prev => ({
          ...prev,
          [index]: videoTitle
        }));
      }
    });
  }, []);

  if (!youtubeSection) {
    console.error("youtubeSection object for YouTube section is missing");
    return null;
  }

  if (!youtubeSection.display) {
    return null;
  }

  // Convert YouTube watch URLs to embed URLs
  const convertToEmbedUrl = (url) => {
    if (!url) return "";
    
    // Extract video ID and list ID from URL
    const videoIdMatch = url.match(/[?&]v=([^&]+)/);
    const listMatch = url.match(/[?&]list=([^&]+)/);
    
    if (videoIdMatch) {
      const videoId = videoIdMatch[1];
      let embedUrl = `https://www.youtube.com/embed/${videoId}`;
      
      if (listMatch) {
        embedUrl += `?list=${listMatch[1]}`;
      }
      
      return embedUrl;
    }
    
    return url;
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="youtube">
        <div className="youtube-header">
          <h1 className="youtube-header-title">{youtubeSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode youtube-header-subtitle"
                : "subTitle youtube-header-subtitle"
            }
          >
            {youtubeSection.subtitle}
          </p>
        </div>
        <div className="youtube-main-div">
          {youtubeSection.videos.map((video, i) => {
            const videoUrl = typeof video === 'string' ? video : video.url;
            if (!videoUrl) {
              console.log(
                `Video URL for ${youtubeSection.title} is missing`
              );
              return null;
            }
            const embedUrl = convertToEmbedUrl(videoUrl);
            const title = videoTitles[i] || (typeof video === 'object' ? video.title : '') || 'Loading...';
            
            return (
              <div key={i} className="youtube-video-card">
                <div className="youtube-video-wrapper">
                  <iframe
                    className="youtube-video"
                    src={embedUrl}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={title}
                  ></iframe>
                </div>
                <h3 className={isDark ? "dark-mode youtube-video-title" : "youtube-video-title"}>
                  {title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </Fade>
  );
}
