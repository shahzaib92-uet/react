import React from 'react'

const Footer = () => {
  return (
    <div>
  
    <footer class="bg-dark text-white pt-4">
      <div class="container">
        <div class="row">
          
          <div class="col-md-4">
            <h5>About Us</h5>
            <p>
              We are a web development company providing high-quality services
              to help businesses grow online.
            </p>
          </div>
    
       
          <div class="col-md-4">
            <h5>Quick Links</h5>
            <ul class="list-unstyled">
              <li><a href="#" class="text-white">Home</a></li>
              <li><a href="#" class="text-white">About</a></li>
              <li><a href="#" class="text-white">Services</a></li>
              <li><a href="#" class="text-white">Contact</a></li>
            </ul>
          </div>
    
          
          <div class="col-md-4">
            <h5>Contact Us</h5>
            <ul class="list-unstyled">
              <li><i class="fas fa-map-marker-alt"></i> 1234 Street Name, City</li>
              <li><i class="fas fa-phone"></i> (123) 456-7890</li>
              <li><i class="fas fa-envelope"></i> info@example.com</li>
            </ul>
          </div>
        </div>
      
        <div class="row mt-3">
          <div class="col text-center">
            <a href="#" class="text-white mr-4"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="text-white mr-4"><i class="fab fa-twitter"></i></a>
            <a href="#" class="text-white mr-4"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" class="text-white"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    
      <div class="bg-light text-dark text-center py-2 mt-3">
        <p class="mb-0">&copy; 2024 Your Company Name. All Rights Reserved.</p>
      </div>
    </footer>
    
    
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
     
</div>
  )
}

export default Footer