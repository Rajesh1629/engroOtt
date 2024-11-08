import React from 'react'
import "../../../public/detailpage.css";
import Video from '../components/video';

const Detail = () => {
    const videoJsOptions = {
        controls: true,
        autoplay: false,
        preload: 'auto',
        sources: [
          {
            src: 'https://engro-xms-dev.engro.in/engro-audio/6729ff373503d00001f892d5.mp3',
            type: 'audio/mp3',
          },
        ],
        poster: 'https://engro-xms-dev.engro.in/posterImage/672a00603503d00001f892d6.jpg'
      };
  return (
    <div>
             <Video options={videoJsOptions} />
<div className="widget">
    <div className="image-section">
        <img src="https://excellencetheme.com/templates/avastream/images/play-page/02.jpg" alt="Movie Thumbnail"/>
        <div className="quality">
            <span>1080p</span> <span>24p</span> <span>7.1</span>
        </div>
    </div>
    <div className="info-section">
        <h1>The Search</h1>
        <div className="metadata">
            <span>18+</span>
            <span>&#9679; 4 Seasons</span>
            <span>&#9679; 2021</span>
            <span>&#9679; Action</span>
            <span>&#9679; United States</span>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="movie-persons mb-4">
                                    <div className="person-block">
                                        <h5 className="title">Director</h5>
                                        <p className="name">Christopher Nolan</p>
                                    </div>
                                    <div className="person-block">
                                        <h5 className="title">Cast</h5>
                                        <p>Christian Bale, Michael Cain, Gary Oldman, Anne Hathway, Tom Hardy, Marion Cotillard</p>
                                    </div>
        </div>
        
        <div className="buttons">
            <button>Play</button>
            <button>My List</button>
            <button>Trailer</button>
            <button>Share</button>
        </div>
    </div>
    
</div> 
<section className="latest-episodes">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="block-title">Latest Episodes</h2>
                        </div>
                    </div>
                    <div className="videos-list">
                        <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2">
                            <div className="episode-block">
                                <div className="episode-img position-relative">
                                    <img src="https://excellencetheme.com/templates/avastream/images/episodes/01.jpg" className="img-fluid img-zoom" alt=""/>
                                    <div className="episode-number">1</div>
                                    <div className="episode-play-info">
                                        <div className="episode-play">
                                            <a href="watch-show.html">
                                                <i className="far fa-play-circle"></i>
                                            </a>
                                        </div> 
                                    </div>
                                </div>
                                <div className="episode-desc p-3">
                                    <div className="episodes-text">
                                        <span className="text-white">11 Aug 20</span>
                                        <span className="text-primary">30m</span>
                                    </div>
                                    <a href="">
                                        <p className="episode-name">Lorem Ipsum is simply dummy text
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2">
                            <div className="episode-block">
                                <div className="episode-img position-relative">
                                    <img src="https://excellencetheme.com/templates/avastream/images/episodes/01.jpg" className="img-fluid img-zoom" alt=""/>
                                    <div className="episode-number">2</div>
                                    <div className="episode-play-info">
                                        <div className="episode-play">
                                            <a href="watch-show.html">
                                            
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="episode-desc p-3">
                                    <div className="episodes-text">
                                        <span className="text-white">11 Aug 20</span>
                                        <span className="text-primary">30m</span>
                                    </div>
                                    <a href="watch-show.html">
                                        <h6 className="episode-name text-white mb-0">Lorem Ipsum is simply dummy text
                                        </h6>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2">
                            <div className="episode-block">
                                <div className="episode-img position-relative">
                                    <img src="https://excellencetheme.com/templates/avastream/images/episodes/01.jpg" className="img-fluid img-zoom" alt=""/>
                                    <div className="episode-number">3</div>
                                    <div className="episode-play-info">
                                        <div className="episode-play">
                                            <a href="watch-show.html">
                                                <i className="far fa-play-circle"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="episode-desc p-3">
                                    <div className="episodes-text">
                                        <span className="text-white">11 Aug 20</span>
                                        <span className="text-primary">30m</span>
                                    </div>
                                    <a href="watch-show.html">
                                        <h6 className="episode-name text-white mb-0">Lorem Ipsum is simply dummy text
                                        </h6>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2">
                            <div className="episode-block">
                                <div className="episode-img position-relative">
                                    <img src="https://excellencetheme.com/templates/avastream/images/episodes/01.jpg" className="img-fluid img-zoom" alt=""/>
                                    <div className="episode-number">4</div>
                                    <div className="episode-play-info">
                                        <div className="episode-play">
                                            <a href="watch-show.html">
                                                <i className="far fa-play-circle"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="episode-desc p-3">
                                    <div className="episodes-text">
                                        <span className="text-white">11 Aug 20</span>
                                        <span className="text-primary">30m</span>
                                    </div>
                                    <a href="watch-show.html">
                                        <h6 className="episode-name text-white mb-0">Lorem Ipsum is simply dummy text
                                        </h6>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2">
                            <div className="episode-block">
                                <div className="episode-img position-relative">
                                    <img src="https://excellencetheme.com/templates/avastream/images/episodes/01.jpg" className="img-fluid img-zoom" alt=""/>
                                    <div className="episode-number">5</div>
                                    <div className="episode-play-info">
                                        <div className="episode-play">
                                            <a href="watch-show.html">
                                                <i className="far fa-play-circle"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="episode-desc p-3">
                                    <div className="episodes-text">
                                        <span className="text-white">11 Aug 20</span>
                                        <span className="text-primary">30m</span>
                                    </div>
                                    <a href="watch-show.html">
                                        <h6 className="episode-name text-white mb-0">Lorem Ipsum is simply dummy text
                                        </h6>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2">
                            <div className="episode-block">
                                <div className="episode-img position-relative">
                                    <img src="https://excellencetheme.com/templates/avastream/images/episodes/01.jpg" className="img-fluid img-zoom" alt=""/>
                                    <div className="episode-number">6</div>
                                    <div className="episode-play-info">
                                        <div className="episode-play">
                                            <a href="watch-show.html">
                                                <i className="far fa-play-circle"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="episode-desc p-3">
                                    <div className="episodes-text">
                                        <span className="text-white">11 Aug 20</span>
                                        <span className="text-primary">30m</span>
                                    </div>
                                    <a href="watch-show.html">
                                        <h6 className="episode-name text-white mb-0">Lorem Ipsum is simply dummy text
                                        </h6>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
</section> 
</div>
            )
}

export default Detail