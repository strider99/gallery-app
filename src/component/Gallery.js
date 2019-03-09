
import React, { Component } from 'react';
class Gallery extends Component {
  render() {
    return (
      <div>
  <div class="alert alert-success" role="alert">
  Welcome to Gallery App
</div>

  <button type="upload" className="btn btn-primary">Upload></button>



<div class="container">
  <div class="row">
    <div class="col">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWUPmV612kd57STWFH2qtAb-_CVzHtzH9h4Mm5V6iTVns2mejv" />
    </div>

    <div class="col-sm">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYMbujuXacB5aEV_TbUVS_DOdYEWgWE10RmfFF9O5uYMGqODzbmw" />
    </div>

    <div class="col-sm">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiUoYtLMRR384z5-dVrjO9JDSKSP2zMfVDjIOV2Om5ox7rEOtj" alt="cat" class="cat" />
    </div>

    <div class="col-sm">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiUoYtLMRR384z5-dVrjO9JDSKSP2zMfVDjIOV2Om5ox7rEOtj" alt="cat" class="cat" />
    </div>



  </div>
</div>
</div>

    );
  }
}

export default Gallery;









