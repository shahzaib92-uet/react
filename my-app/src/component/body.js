const Body=()=>{
    return(
  <>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Your Brand</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  
  <header class="bg-primary text-white text-center py-5">
    <div class="container">
      <h1 class="display-4">Welcome to Your Website</h1>
      <p class="lead">We provide the best services to help your business grow.</p>
      <a href="#" class="btn btn-light btn-lg mt-3">Learn More</a>
    </div>
  </header>


  <section class="py-5">
    <div class="container">
      <div class="row text-center">
        <div class="col-lg-4">
          <div class="card border-0">
            <div class="card-body">
              <i class="fas fa-cogs fa-3x mb-3"></i>
              <h5 class="card-title">Feature One</h5>
              <p class="card-text">Description of the first feature goes here.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card border-0">
            <div class="card-body">
              <i class="fas fa-bolt fa-3x mb-3"></i>
              <h5 class="card-title">Feature Two</h5>
              <p class="card-text">Description of the second feature goes here.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card border-0">
            <div class="card-body">
              <i class="fas fa-heart fa-3x mb-3"></i>
              <h5 class="card-title">Feature Three</h5>
              <p class="card-text">Description of the third feature goes here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

 
  <section class="py-5 bg-light">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <h2 class="text-center mb-4">Contact Us</h2>
          <form>
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input type="text" class="form-control" id="name" placeholder="Your Name"/>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" placeholder="Your Email"/>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea class="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

</>
    )
}
export default Body;