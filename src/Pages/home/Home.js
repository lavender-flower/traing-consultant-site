import React from 'react';
import './home.css';
const Home = () => {
    return (
        <>
    <nav class="navbar">
        <div class="container-nav">
            <div class="logo" ><img src='./images/logo.png'></img></div>
            <ul class="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Study Abroad</a></li>
                <li><a href="#">Work Abroad</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            <div class="nav-buttons">
                
                <button  class="btn btn-primary">Free Consultant</button>
            </div>
        </div>
    </nav>

    <section class="hero">
        <div class="hero-content">
            <h1 class='animate-charcter'>Unlock Global Opportunities with Expert Guidance</h1>
            <p>Your trusted partner for visa applications, international education, and global career placements.</p>
            <a href="#" class="btn btn-primary">Apply Now</a>
        </div>
    </section>
    <section class="about-us">
    <div class="about-container">
    <div class="about-image">
            <img src='./images/2.png' />
        </div>
        <div class="about-text">
            <p>ABOUT US</p>
            <h2>Your Journey Abroad Starts Here</h2>
            <p>We are a leading training and study/work abroad consultancy, dedicated to empowering students and professionals to achieve their goals. Our expert guidance helps individuals navigate opportunities for international education, career growth, and cultural experiences. Join us to unlock your potential and explore the world.</p>
            <a href="#" class="btn btn-primary">Read More</a>
            <div className='special'>
                <p>Our Speciiality</p>
                <div className='p'>
                    <p>✔ Transforming Healthcare for Excellence</p>
                    <p className='padd'> ✔ Boost Your Brand with Precision</p>
                </div>
                <div className='p'>
                <p>✔ Enabling Educational and Travel Success
                </p>
                    <p>✔ Sparkling Clean Every Time</p>
                 
                </div>
                
                </div>
        </div>
    
    </div>
</section>

<section class="image-banner">
    <div class="overlay">
        <div class="text-box">
            <div>
                <img src='./images/b-1.webp'></img>
                <h3>Student Visa Assistance</h3>
                <small>Want to study in the UK, USA, Australia, Canada, or Ireland? Care2 Training simplifies the process. We guide students through affordable short courses and full-degree programs, no high qualifications needed. Build your future with us.

</small><br/> <button class='btn-3'>Learn More</button>
            </div>
            <div>
            <img src='./images/b-2.webp'></img>
            <h3>Training Programs</h3>
                <small>Looking for top talent or your next job? Care2 Training connects skilled professionals and employers in healthcare, education, and more. Whether hiring or job-seeking, we ensure a fast, transparent, and reliable process. Trust us for your recruitment needs.</small>
               <br/> <button class="btn-3">Learn More</button>
            </div>
            <div>
            <img src='./images/b-3.webp'></img>
            <h3>Work Abroad Opportunities</h3>
                <small>Dream of working abroad? Care2 Training connects skilled workers to opportunities in countries like the UK, Canada, USA, Australia, and Ireland. We offer end-to-end support for job placements, visas, and cultural integration to help you succeed globally.
                    
                </small><br/> <button class="btn-3">Learn More</button>
            </div>
        </div>
    </div>
</section>
<section>
    <div class="choose-container">
    <div >
            <img  src='./images/4.png' />
        </div>
        <div className='c-text'>
        <div class="choose-text">
        <p>Why Choose US?</p>
            <h2>"Expert guidance from experienced consultants"</h2>
            <p>we are committed to ensuring the comfort, happiness, and overall well-being of our clients. Our mission is to provide exceptional, personalized care that is uniquely tailored to meet your individual needs and preferences. With a focus on your satisfaction, we strive to exceed expectations and foster a sense of trust and confidence in our services.  </p>
            <a href="#" class="btn-3">Read More</a>
        </div>
           
        </div>
    
    </div>
</section>

<section class="form-section">
    <div className='for-txt'>
        <h2>Get In Touch</h2>
        <h3>Feel Free To Send Us Message How Can We <br/>Help You.</h3>
        <img width='400vw' src='./images/5.jpg'></img><br/>
        <small>Fill out the form to choose your preferred schedule,<br/> package, and instructor. After submission, we’ll confirm <br/>your booking and send you all the details you need</small>
    </div>
    <div class="form-container">
        <h2>Contact Us</h2>
        <form action="#" method="POST">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" required/>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required/>
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
            </div>
            <button type="submit" class="btn-3">Send Message</button>
        </form>
    </div>
</section>

    <footer class="footer">
    
   <div className='d-flex'>
   <div >
            <h1>Care2 Training</h1>
            <p>Care2 Training specializes in study abroad, <br/>work abroad, and recruitment solutions. We <br/>provide personalized guidance, trusted <br/> partnerships, and seamless processes to <br/>help individuals achieve their academic,<br/> career, and professional goals globally.</p>
        </div>
        <div class="contact-details">
            <h2>Contact</h2>
            <p>Address: 123 Learning Street, Knowledge City, 45678</p>
            <p>Phone: +1 234 567 890</p>
            <p>Email: info@learningplatform.com</p>
        </div>
        <div class="contact-details">
            <h2>Services</h2>
            <p>Work abroad</p>
            <p>Study Abroad</p>
            <p>Visa Processing</p>
        </div>
        <div class="social-media">
            <h2>Socials</h2>
       <img src='./images/social.jpg' width='100vw'></img>
        </div>
   </div>
<hr></hr>
        <div class="legal-links">
            <small>© Care2 Training | All rights reserved.

</small>
<div >            <a href="#">Privacy Policy</a>
<a href="#">Terms of Service</a></div>
        </div>
    </footer>

        </>
    );
};

export default Home;