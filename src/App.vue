<template>
  <div id="app">
    <section class="modal-registration">
    <div class="modal-form animated" data-animation-time = "5000">
      <img src="./img/small/men.png" alt="">
        <i class="fa fa-times close" onclick="closeModal()"></i>
      <div class="modal-inputs">
        <div class="modal-input">
          <i class="fa fa-envelope"></i>
          <input type="email" name="username" placeholder=" Введите почту">
        </div>
        <div class="modal-input">
          <i class="fas fa-lock"></i>
          <input type="password" name="password" placeholder=" Введите пароль">
        </div>
        <input type="submit" value="Зарегистрироваться" class="modal-submit">
        <br/>
      </div>
    </div>
  </section>
    </section>
    <section class="modal">
    <div class="modal-form animated" data-animation-time = "5000">
      <img src="./img/small/men.png" alt="">
      <i class="fa fa-times close" onclick="closeModal()"></i>
      <div class="modal-inputs">
        <div class="modal-input">
          <i class="fa fa-envelope"></i>
          <input type="text" name="username" placeholder=" Введите почту">
        </div>
        <div class="modal-input">
          <i class="fas fa-unlock"></i>
          <input type="password" name="password" placeholder=" Введите пароль">
        </div>
        <input type="submit" value="Войти" class="modal-submit">
        <br/>
        <a href="#" class="password-recovery">Востановить пароль</a>
      </div>
    </div>
  </section>
  <section class="banner">
    <img src="./img/big/banner.png" alt="" class="banner-img animated slideInLeft">
    <div class="banner-info animated slideInRight ">
      <span class="banner-price">From $80.000</span>
      <span class="banner-model">Nike Air Max</span>
      <span class="banner-variants"> 50 Variants</span>
      <span class="banner-text">Since this is our favorite sneaker, we’re bringing you 50 variants to suit everyone’s needs.</span>
      <button class="banner-btn">BROWSE VARIANTS</button>
    </div>
  </section>
  <div class="premium animated zoomIn">
    <img src="./img/medium/Premium.png" alt="">
  </div>
  <div class="selected">
    <div class="nav">
      <div class="nav-list  animated mov">
        <li class="selected__item active">NEW</li>
        <li class="selected__item">POPULAR</li>
        <li class="selected__item">TOP PICKS</li>
      </div>
    </div>
  </div>
  <section class="model-footwear ">
    <div class="model-footwear-innered">
      <div class="model-footwear-inner mov2 animated">
        <div class="model-info">
          <div class="model-price">
            <span class="model-price-discount">$45.00</span>
            <img src="./img/small/discount25.png" alt="">
          </div>
          <div class="model-price-real">$60.00</div>
          <img src="./img/medium/SblueAd.png" alt="" class="model-photo">
          <div class="model-mod">
            <span class="model-gender">MEN</span>
            <span class="model">Converse Breakpoint Suede Blue</span>
          </div>
        </div>
      </div>
      <div class="model-footwear-inner mov2 animated">
        <div class="model-info">
          <div class="model-price-changed">
            <span class="model-price-undiscount">$55.00</span>
          </div>
          <img src="./img/medium/ConversCT.png" alt="" class="model-photo">
          <div class="model-mod">
            <span class="model-gender">MEN / Women</span>
            <span class="model"> Converse CT All Star II</span>
          </div>
        </div>
      </div>
       <div class="model-footwear-inner mov2 animated">
        <div class="model-info">
          <div class="model-price">
            <span class="model-price-discount">$60.00</span>
            <img src="./img/small/discount25.png" alt="">
          </div>
          <div class="model-price-real">$80.00</div>
          <img src="./img/medium/AdPureBoost.png" alt="" class="model-photo">
          <div class="model-mod">
            <span class="model-gender">women</span>
            <span class="model">Adidas Pure Boost Chill</span>
          </div>
        </div>
      </div>
      <div class="model-footwear-inner mov2 animated">
        <div class="model-info">
          <div class="model-price-changed">
            <span class="model-price-undiscount">$50.00</span>
          </div>
          <img src="./img/medium/PumaDulpex.png" alt="" class="model-photo">
          <div class="model-mod">
            <span class="model-gender">men</span>
            <span class="model"> Puma Duplex W Casual</span>
          </div>
        </div>
      </div>
      <div class="model-footwear-inner mov3 animated">
        <div class="model-info">
          <div class="model-price-changed">
            <span class="model-price-undiscount">$90.00</span>
          </div>
          <img src="./img/medium/AdAlpha1M.png" alt="" class="model-photo">
          <div class="model-mod">
            <span class="model-gender">men</span>
            <span class="model">Adidas Alphabounce 1M</span>
          </div>
        </div>
      </div>
      <div class="model-footwear-inner mov3 animated">
        <div class="model-info">
          <div class="model-price">
            <span class="model-price-discount">$50.00</span>
            <img src="./img/small/discount50.png" alt="">
          </div>
          <div class="model-price-real">$100.00</div>
          <img src="./img/medium/AsicsEpr.png" alt="" class="model-photo">
          <div class="model-mod">
            <span class="model-gender">MEN</span>
            <span class="model">Asics GEL-Epirus</span>
          </div>
        </div>
      </div> 
      <div class="model-footwear-inner mov3 animated">
        <div class="model-info">
          <div class="model-price-changed">
            <span class="model-price-undiscount">$40.00</span>
          </div>
          <img src="./img/medium/AdOrig.png" alt="" class="model-photo">
          <div class="model-mod">
            <span class="model-gender">men</span>
            <span class="model">Adidas Original Courtvantage Mesh</span>
          </div>
        </div>
      </div>
      <div class="model-footwear-inner mov3 animated">
        <div class="model-info">
          <div class="model-price-changed">
            <span class="model-price-undiscount">$80.00</span>
          </div>
          <img src="./img/medium/AdClimacool.png" alt="" class="model-photo">
          <div class="model-mod">
            <span class="model-gender">men</span>
            <span class="model">Adidas Originals Climacool 1</span>
          </div>
        </div>
      </div>     
    </div>    
  </section>
  <div class="brands">
    <div class="brands-inner">
      <img src="./img/small/Adidas.png" alt="" class="mov4 animated">
      <img src="./img/small/nike.png" alt="" class="mov4 animated">
      <img src="./img/small/Puma.png" alt="" class="mov4 animated">
      <img src="./img/small/asics.png" alt="" class="mov4 animated">
      <img src="./img/small/newBefance.png" alt="" class="mov4 animated">
      <img src="./img/small/Fila.png" alt="" class="mov4 animated">
    </div>
  </div>
    <div class="last-title animated mov3">
      <span>last news</span>
    </div>
  <section class="last-news">
    <div class="last-inner">
      <div class="new-info animated">
        <div class="new-img">
         <img src="./img/medium/NikeNew.png" alt=""> 
        </div>
        <div class="new-text">
          <span class="new-date">
            dec 27, 2017
          </span>
          <span class="new-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, quam!
          </span>
          <div class="comment">
            <img src="./img/small/comment.png" alt="">
            <span class="new-comment">24 comments</span>
          </div>
        </div>
      </div>
      <div class="new-info animated">
        <div class="new-img">
         <img src="./img/medium/NewRunning.png" alt=""> 
        </div>
        <div class="new-text">
          <span class="new-date">
            dec 27, 2017
          </span>
          <span class="new-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, quam!
          </span>
          <div class="comment">
            <img src="./img/small/comment.png" alt="">
            <span class="new-comment">24 comments</span>
          </div>
        </div>
      </div>
      <div class="new-info animated">
        <div class="new-img">
         <img src="./img/medium/NewShoes.png" alt=""> 
        </div>
        <div class="new-text">
          <span class="new-date">
            dec 27, 2017
          </span>
          <span class="new-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, quam!
          </span>
          <div class="comment">
            <img src="./img/small/comment.png" alt="">
            <span class="new-comment">24 comments</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="usp">
    <div class="usp-inner">
      <div class="usp-info animated  mov3">
        <img src="./img/small/FS.png" alt="">
        <span class="usp-title">Free Shopping</span>
        <span class="usp-subtitle">in Europe</span>
      </div>
      <div class="usp-info animated mov3">
        <img src="./img/small/MB.png" alt="">
        <span class="usp-title">Money Back </span>
        <span class="usp-subtitle">Guaranteed</span>
      </div>
      <div class="usp-info animated mov3">
        <img src="./img/small/24S.png" alt="">
        <span class="usp-title">24 / 7 Customer </span>
        <span class="usp-subtitle">Support</span>
      </div>
      <div class="usp-info animated mov3">
        <img src="./img/small/LP.png" alt="">
        <span class="usp-title">Lowest Prices </span>
        <span class="usp-subtitle">Guaranteed</span>
      </div>
      <div class="usp-info animated mov3">
        <img src="./img/small/EI.png" alt="">
        <span class="usp-title">Exclusive items for </span>
        <span class="usp-subtitle">Sportshold</span>
      </div>
      <div class="usp-info animated mov3">
        <img src="./img/small/5D.png" alt="">
        <span class="usp-title">5-Day Delivery</span>
        <span class="usp-subtitle">in Europe</span>
      </div>
    </div>
  </section>
  <section class="footer">
    <div class="footer-inner">
      <div class="footer-contact animated mov2">
        <div class="footer-contact-info">
          <img src="./img/small/FooterCall.png" alt="">
          <div class="contact-text">
            <span class="contact-title">CALL US</span>
           <span class="contact-subtitle">+77472334431</span>            
          </div>
        </div>
        <div class="footer-contact-info ">
          <img src="./img/small/FooterMail.png" alt="">
          <div class="contact-text">
            <span class="contact-title">EMAIL US</span>
            <span class="contact-subtitle">i.artemon87@gmail.com</span>     
          </div>
        </div>
        <div class="footer-contact-info">
          <img src="./img/small/FooterGeo.png" alt="">
          <div class="contact-text">
            <span class="contact-title">ADRESS </span>
            <span class="contact-subtitle">Kazybek bi 117</span>          
          </div>
        </div>
      </div>  
      <div class="footer-info animated mov2">
        <span class="footer-title">Navigation</span>
        <span class="footer-subtitle">Home</span>
        <span class="footer-subtitle">Support</span>
        <span class="footer-subtitle">Delivery</span>
        <span class="footer-subtitle">About us</span>
      </div>
      <div class="footer-info animated mov2">
        <span class="footer-title">categories</span>
        <span class="footer-subtitle">Men</span>
        <span class="footer-subtitle">Women</span>
        <span class="footer-subtitle">Children</span>
      </div> 
      <div class="footer-info animated mov2">
        <span class="footer-title">sales</span>
        <span class="footer-subtitle">New Arrivals</span>
        <span class="footer-subtitle">Most Popular</span>
        <span class="footer-subtitle">Top Picks</span>
        <span class="footer-subtitle">Outlet</span>
      </div> 
      <div class="footer-info animated mov2">
        <span class="footer-title">support</span>
        <span class="footer-subtitle">Shopping & Delivery</span>
        <span class="footer-subtitle">Returnn Policy</span>
        <span class="footer-subtitle">Terms of Service</span>
        <span class="footer-subtitle">Privace Policy</span>
        <span class="footer-subtitle">Contact us</span>
      </div>   
    </div>
  </section>
  <section class="footer-social">
    <div class="footer-social-inner animated mov3">
      <img src="./img/small/Logo.png" alt="">
      <div class="footer-copy">
        <span class="footer-text">&copy; 2017 Sportshold. All rights reserved</span>
      </div>
      <div class="footer-soc">
        <i class="fab fa-vk"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-youtube"></i>
      </div>      
    </div>
  </section>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>


<style>

</style>
