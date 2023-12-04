function Home() {
    return (
      <div  className='home'>

        <div className="homeWelcomeImage">
          <img src="https://octagonpancevo.rs/slike/slider/octagon-pancevo-teretana-2.jpg" alt="React" className="WelcomeImage" />
        </div>

      <br /><br />
      <div className="flex-container">
          <div>
              <h3>ABOUT: </h3>
              <p> 
              Welcome to Belgrade Gym Finder, your ultimate resource for discovering and exploring 
              the finest fitness establishments in the heart of Serbia's vibrant capital. 
              Our platform is designed to empower your fitness journey by providing comprehensive 
              information about various gyms across Belgrade.
              </p>
          </div>
         
          <div>
          <h3>TRAINING BENEFITS: </h3>
              <p> 
              We believe that training is not just about physical well-being; it's a lifestyle that 
              fosters holistic growth. Through our platform, we emphasize the importance of 
              regular exercise, highlighting its transformative effects on both the body and mind. 
              Explore articles and resources that delve into the significance of training, 
              providing insights into its impact on overall health, productivity, and well-being.
                <br></br>
              Join us on this fitness journey as we help you uncover the best of Belgrade's gym culture 
              and promote the importance of incorporating training into your daily routine for a 
              healthier and happier lifestyle.
              </p>
          </div>
          <div>
          <img src="https://www.gqmiddleeast.com/2021/06/Workout-clothes.jpg" alt="React" className="slikaHome" />
          </div>
          <div>
          <img src="https://www.vmcdn.ca/f/files/kamloopsthisweek/images/coronavirus/gym-photo2.jpg;w=1200;h=800;mode=crop" alt="React" className="slikaHome" />
          </div>

    </div>

  </div>
    );
  }

  export default Home;