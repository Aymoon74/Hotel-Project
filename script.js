const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');

navBtn.addEventListener("click", function () {
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener("click", function () {
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener("click", function (event) {
    if (event.target === modal) {
        sideNav.classList.remove('show');
        modal.classList.remove('showModal')
    }
});



function change_background() {
    var btn = document.getElementById('services');
    btn.style.backgroundColor = 'orange';
}


function change_para() {
    var btn = document.getElementById('paragraph').innerHTML = 'Relaxation is crucial for maintaining overall well-being. Engaging in activities that promote relaxation, such as deep breathing, meditation, or leisurely pursuits, helps to reduce stress levels, improve mental clarity, and enhance emotional balance. Regular relaxation is associated with better physical health, increased productivity, and a more positive outlook on life.';
}

function know_less() {
    var x = document.getElementById('pp').innerHTML = 'Our housekeeping team ensures a pristine and welcoming environment throughout your stay.';
}

function info() {
    var y = document.getElementById('pp').innerHTML = "Our housekeeping team ensures a pristine and welcoming environment throughout your stay, with meticulous attention to cleanliness and comfort. From the crisp linens on your bed to the spotless surfaces in your room, our commitment to maintaining a hygienic and inviting atmosphere is paramount. Experience the epitome of hospitality as our housekeeping staff goes above and beyond to make your accommodation a haven of cleanliness and order.";
}

function disappear() {
    var z = document.getElementById('gg').innerHTML = "Your safety is our top priority, and our hotel takes room security seriously. Each room is equipped with state-of-the-art electronic key card systems, ensuring secure access for ourguests. With 24/7 surveillance, our commitment to providing a safe and secure environmentguarantees peace of mind throughout your stay.";

}


function reserving() {
    var nats_id = document.getElementById('nat_id').value;
    var ph_num = document.getElementById('phone').value;

    if (nats_id.length == 14 && ph_num.length == 11) {
        alert('Your booking has been successfully completed');
    } else {
        alert('National ID should be exactly 14 characters long or Phone Number should be exactly 11 characters long National ID, Phone Number must be number.');
    }
}



function shows() {
    var u = document.getElementById('aa').innerHTML = 'EGP 600/';
    var bbb = document.getElementById('img10').src = "images40.jpg";
}

function showss() {
    var u = document.getElementById('bb').innerHTML = 'EGP 1000/';
    var rrr = document.getElementById('img11').src = "images41.jpg";

}

function showsss() {
    var u = document.getElementById('cc').innerHTML = 'OFFER: Book directly with us and receive a 20% discount on your stay, along with a free breakfast every morning Indulge in luxury with our exclusive weekend package, including spa credits and late checkout.';
    var rrr = document.getElementById('img12').src = "images42.jpg";

}

function price_image() {
    var t = document.getElementById('ee').innerHTML = 'Price for Session: is 500 EGP';
    var d = document.getElementById('image').src = 'images16.jpg';

    var r = document.getElementById('images').src = 'imagess20.jpg'
    var g = document.getElementById('imagess').src = 'images21.jpg';
}

function prices_image() {

    var t = document.getElementById('ff').innerHTML = 'Price for Session: is 750 EGP'

    var r = document.getElementById('Image').src = 'images23.png'
    var v = document.getElementById('Images').src = 'images22.jpeg'
    var g = document.getElementById('Imagess').src = 'images24.jpeg';

}

function price_images() {

    var t = document.getElementById('nn').innerHTML = 'Price for Session: is 950 EGP'

    var q = document.getElementById('Imagee').src = 'images24.jpg'
    var p = document.getElementById('Imagees').src = 'images25.jpeg'
    var l = document.getElementById('Imageess').src = 'images26.avif';

}

function sh_menu() {
    var gg = document.getElementById('qq').innerHTML = "<ol><li>Beans</li><li>Scrambled Eggs</li><li>Bacon or Sausage</li><li>Fresh Fruit Bowl</li><li>Toast or English Muffin</li><li>Lentil Soup</li></ol>";
    var ff = document.getElementById('ss').innerHTML = "EGP 450/";
    var ww = document.getElementById('image1').src = 'images27.jpg';
}

function sh_menus() {
    var gg = document.getElementById('rr').innerHTML = "<ol><li>Grilled Salmon</li><li>Chicken Piccata</li><li>Grilled Chicken Caesar Salad</li><li>Vegetable Stir-Fry</li><li>Asian Sesame Ginger Salad</li><li>Mediterranean Quinoa Salad</li></ol>";
    var cc = document.getElementById('kk').innerHTML = "EGP 650/";
    var ww = document.getElementById('image2').src = 'images28.jpg';

}


function sh_menuss() {
    var gg = document.getElementById('dd').innerHTML = "<ol><li>Shrimp Scampi</li><li>Stuffed Mushrooms</li><li>Caprese Bruschetta</li><li>Cream of Wild Mushroom</li><li>Chocolate Decadence Cake</li><li>Key Lime Pie</li></ol>";
    var zz = document.getElementById('ll').innerHTML = "EGP 850/";
    var mm = document.getElementById('image3').src = 'images29.jpg';

}



function guests() {
    var p = document.getElementById('lol').innerHTML = 'Ronaldo, Portugal';
    var vh = document.getElementById('kol').innerHTML = 'Yassin, Egypt';
    var gf = document.getElementById('fol').innerHTML = 'Maaloul, Tunisia';

    var vv = document.getElementById('zz').innerHTML = "Exceptional Stay with Outstanding Service Our recent stay at this hotel exceeded all expectations. From the moment we checked in, the  staff's warmth and hospitality made us feel truly welcomed. The rooms were immaculate, offering a perfect blend of comfort and style. The attention to detail in every aspect, coupled with the central location, made our experience exceptional. Highly recommend this hotel for a memorable";

    var zz = document.getElementById('img7').src = 'images30.jpg';

    var vv = document.getElementById('img1').src = 'images31.jpg';
    var bb = document.getElementById('img2').src = 'images32.jpg';
}

function guestss() {

    var zzz = document.getElementById('para').innerHTML = "A Hidden Gem and Pure Luxury,Discovering this hotel was like stumbling upon a hidden gem. The rooms are a haven of luxury,elegantly furnished and boasting breathtaking views. The staff's dedication to providing top-notch service is evident in every interaction. We enjoyed the diverse culinary offerings, and the central location made exploring the city a breeze. An unforgettable stay that has set the bar high for our future travels!";

    var p = document.getElementById('hol').innerHTML = 'Abo_Samy, Egypt';
    var vh = document.getElementById('dol').innerHTML = 'Halland, Norway';
    var gf = document.getElementById('sol').innerHTML = 'Hakimi, Morrocco';


    var r = document.getElementById('img8').src = 'images33.jpg';
    var v = document.getElementById('img3').src = 'images34.jpg';
    var g = document.getElementById('img4').src = 'images35.jpg';

}

function guestsss() {

    var zzz = document.getElementById('ggg').innerHTML = "Perfect Blend of Relaxation and Convenience,Our stay at this hotel was the epitome of comfort and convenience. The rooms were not only impeccably clean and well-appointed but also offered a serene escape from the city's hustle. The on- site amenities, from the inviting pool to the cozy lounge, provided the perfect balance   between relaxation and entertainment. Kudos to the attentive staff for making our stay truly enjoyable. Will definitely be our go-to choice for future visits!";



    var ppp = document.getElementById('ool').innerHTML = 'Modric, Croatia';
    var fff = document.getElementById('mol').innerHTML = 'Figo, Portugal';
    var ddd = document.getElementById('xol').innerHTML = 'Bellingham, England';

    var q = document.getElementById('img9').src = 'images36.jpg'
    var p = document.getElementById('img5').src = 'images37.jpg'
    var l = document.getElementById('img6').src = 'images38.jpg';

}
