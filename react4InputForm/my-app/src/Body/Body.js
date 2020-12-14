import React from 'react';
class Body extends React.Component {
  render() {
    return(
      <div>
  
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.pexels.com/photos/196664/pexels-photo-196664.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/1028707/pexels-photo-1028707.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/54320/rose-roses-flowers-red-54320.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>
</div>

      </div>
    )
  }
}
export default Body;