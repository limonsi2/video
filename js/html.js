const bodyHTML =   `
<div id="overlay">
    <div class="overlayContainer">
      
      <div class="video-container"></div>
      <!--  <p style="text-align: center;color: white;"><img src="images1/seemore.svg"></p>-->
      <div class="eyeC "><i class="fa fa-eye eyeSize" aria-hidden="true"></i></div>
  </div>
</div>

<section id="header">
<nav class="navbar navbar-expand-md navbar-light sticky cIndex" id="navbar_sticky">

<div class="smallSearchC">
        <input type="text" name="search" placeholder="Search.." class="smallSearch"> 
        <span class="col_red" style="font-size: 25px; text-align: center;">&#10005</span>
</div>

<div class="container ">
  <a class="navbar-brand text-white fw-bold" href="index.html"><i class="fa fa-link col_red me-1"></i></a>
  
  <div>
    <img id="searchIcon" src="https://i.ibb.co/w0SGXck/search.png" alt="">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>




  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mb-0 searchC">
      <li class="nav-item searchShow">
        <i class="arrow down col_red"> </i>
        <span id="closeB" class="col_red">&#10005</span>
        <input type="text" name="search" placeholder="Search.." id="searchBar">
      </li>

      <li class="nav-item hide">
        <l class="nav-link"> Action</l>
      </li>
      <li class="nav-item hide">
        <a class="nav-link">Animation</a>
      </li>
      <li class="nav-item hide">
        <a class="nav-link">Horror</a>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          More
        </a>
          <ul class="dropdown-menu drop_1" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item">Action</a></li>
          <li><a class="dropdown-item">Animation</a></li>
          <li><a class="dropdown-item">Horror</a></li>
          <li><a class="dropdown-item" >Thriller</a></li>
          <li><a class="dropdown-item" >Adventure</a></li>
          <li><a class="dropdown-item" >Comedy</a></li>
          <li><a class="dropdown-item" >War</a></li>
        </ul>
      </li>
    </ul>
  </div>
</div>
</nav>
</section>

<section id="center" class="center_home">
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
 <div class="carousel-indicators">
   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-label="Slide 1"></button>
   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" class="" aria-current="true"></button>
   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
 </div>
 <div class="carousel-inner">
   <div class="carousel-item active">
     <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSm6S3KTOE3hBkzCBRem-0xXSgVZRFimsci9Ajja1igeW6dN-ct" class="d-block w-100 h800" alt="...">
     <div class="carousel-caption d-md-block">
      <h1 class="font_60"> Deadpool & Wolverine</h1>
    <h6 class="mt-3">
     <span class="col_red me-3">
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star-o"></i>
   </span>
   8.0 (Imdb)      Year : 2024
    <a class="bg_red p-2 pe-4 ps-4 ms-3 text-white d-inline-block" href="#">Action</a>
    </h6>
    <p class="mt-3">Deadpool's peaceful existence comes crashing down when the Time Variance Authority recruits him to help safeguard the multiverse. He soon unites with his would-be pal, Wolverine, to complete the mission and save his world from an existential threat.
 </p>
    <p class="mb-2"><span class="col_red me-1 fw-bold">Starring:</span> Ryan Reynolds</p>
    <p class="mb-2"><span class="col_red me-1 fw-bold">Genres:</span> Action/Comedy</p>
    <p><span class="col_red me-1 fw-bold">Runtime:</span> 2h 07m</p>	
    <h6 class="mt-4"><a class="button" href='https://streamtape.com/v/OP4rkzmkgPCZj3m/Deadpool_and_Wolverine"
'><i class="fa fa-play-circle align-middle me-1"></i> Watch Stream</a></h6>
     </div>
   </div>
   <div class="carousel-item">
     <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS7Seydctw56g5hKHyBcpjSs8heFHA1QRf5hP5FThyjK5TV48wt" class="d-block w-100 h800" alt="...">
     <div class="carousel-caption d-md-block">
      <h1 class="font_60"> Avatar: The Last Airbender</h1>
    <h6 class="mt-3">
     <span class="col_red me-3">
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star-half-o"></i>
    <i class="fa fa-star-o"></i>
   </span>
    7.2 (Imdb)      Year : 2024
    <a class="bg_red p-2 pe-4 ps-4 ms-3 text-white d-inline-block" href="#">Action</a>
    </h6>
    <p class="mt-3">A young boy known as the Avatar must master the four elemental powers to save a world at war and fight a ruthless enemy bent on stopping him.</p>
    <p class="mb-2"><span class="col_red me-1 fw-bold">Starring:</span> Gordon Cormier</p>
    <p class="mb-2"><span class="col_red me-1 fw-bold">Genres:</span> Action-adventure</p>
    <p><span class="col_red me-1 fw-bold">Runtime:</span> 1h 43m</p>	
    <h6 class="mt-4"><a class="button" href="#"><i class="fa fa-play-circle align-middle me-1"></i> Watch Stream</a></h6>
     </div>
   </div>
   <div class="carousel-item">
     <img src="https://m.media-amazon.com/images/M/MV5BOTk4MjFhZTMtOWIxOS00YzE2LThkZGEtMzg0MDAyMmFiZmU1XkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_FMjpg_UX1000_.jpg" class="d-block w-100 h800" alt="...">
     <div class="carousel-caption d-md-block">
      <h1 class="font_60"> Despicable Me 4</h1>
    <h6 class="mt-3">
     <span class="col_red me-3">
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star-o"></i>
    <i class="fa fa-star-o"></i>
   </span>
    6.4 (Imdb)      Year : 2024
    <a class="bg_red p-2 pe-4 ps-4 ms-3 text-white d-inline-block" href="#">Action</a>
    </h6>
    <p class="mt-3">Gru welcomes a new member to the family, Gru Jr., who's intent on tormenting his dad. However, their peaceful existence soon comes crashing down when criminal mastermind Maxime Le Mal escapes from prison and vows revenge against Gru.</p>
    <p class="mb-2"><span class="col_red me-1 fw-bold">Starring:</span> Steve Carell </p>
    <p class="mb-2"><span class="col_red me-1 fw-bold">Genres:</span> Family/Comedy</p>
    <p><span class="col_red me-1 fw-bold">Runtime:</span> 1h 34m</p>	
    <h6 class="mt-4 mb-0"><a class="button" href="#"><i class="fa fa-play-circle align-middle me-1"></i> Watch Stream</a></h6>
     </div>
   </div>
 </div>
 <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
   <span class="visually-hidden">Previous</span>
 </button>
 <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
   <span class="carousel-control-next-icon" aria-hidden="true"></span>
   <span class="visually-hidden">Next</span>
 </button>
</div>
</section>`





const playHTML = `<section id="play">
<div class="play_m clearfix">
 <div class="container">
 <div class="play2 row mt-4">
  <div class="col-md-4 p-0">
   <div class="play2l">
     <div class="grid clearfix">
				  <figure class="effect-jazz mb-0">
					<a href="#"><img loading="lazy" src="https://m.media-amazon.com/images/M/MV5BMmViM2NjZDEtNDE4Mi00MWQ2LTk4ZmUtZDk3ZGQ1MTZiOTQxXkEyXkFqcGdeQXVyNjE2MzI5ODM@._V1_FMjpg_UX1000_.jpg" height="515" class="w-100"  alt="abc"></a>
				  </figure>
			  </div>
   </div>
  </div>
  <div class="col-md-8 p-0">
   <div class="play2r  bg_grey p-4">
	   <h5><span class="col_red">BEST MOVIE OF THE MONTH :</span> LIAM NEESON <span class="col_red">BLACKLIGHT</span><br>
THEY’RE GONNA NEED MORE MEN</h5>
      <h5 class="mt-3">Thriller</h5>
	  <hr class="line">
	  <p class="mt-3">A humble businessman with a buried past seeks justice when his daughter is killed in an act of terrorism. A cat-and-mouse conflict ensues with a government official, whose past may hold clues to the killers' identities.</p>
	  <div class="play2ri row mt-4">
	   <div class="col-md-6">
	    <div class="play2ril">
		 <h6 class="fw-normal">
Running Time: <span class="pull-right">1 hr 50 min</span></h6>
         <hr class="hr_1">
		  <h6 class="fw-normal">
Genre: <span class="pull-right">Action, Thriller</span></h6>
         <hr class="hr_1">
		 <h6 class="fw-normal">
Director: <span class="pull-right">Eget Nulla</span></h6>
         <hr class="hr_1">
		  <h6 class="fw-normal">
Stars: <span class="pull-right">Semp Port, Dapibus Diam</span></h6>
         <hr class="hr_1">
		 <h6 class="fw-normal">
Release Date: <span class="pull-right">2023</span></h6>
         <hr class="hr_1 mb-0">
		</div>
	   </div>
	   <div class="col-md-6">
	    <div class="play2rir">
		 <h6 class="fw-normal">Imdb - 9.2</h6>
         <div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 92%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
          <h6 class="fw-normal mt-3">Semper - 7.3</h6>
         <div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 73%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
          <h6 class="fw-normal mt-3">Dapibus - 9.0</h6>
         <div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 90%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
          <h6 class="fw-normal mt-3">Ipsum - 8.3</h6>
         <div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 83%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
        <h6 class="fw-normal mt-3">Lorem - 7.9</h6>
         <div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 79%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
		</div>
	   </div>
	  </div>
   </div>
  </div>
 </div>
</div>
</div>
</section>`


