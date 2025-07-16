/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: #f4f4f4;
    line-height: 1.6;
}

/* Header */
.header-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background: #fff;
}

.poliklinika-header {
    display: flex;
    align-items: center;
    flex: 1;
}

.logo img {
    width: 80px;
    height: auto;
}

.text h1, .text h3 {
    font-size: clamp(1rem, 2.5vw, 1.5rem); /* Scales with viewport */
}

.quote-container {
    flex: 1;
    text-align: center;
}

.ishonch-telefon {
    flex: 1;
    text-align: right;
}

/* Navigation */
.menu ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    padding: 10px;
    background: #007BFF;
}

.menu li {
    margin: 5px 10px;
}

.menu a {
    color: white;
    text-decoration: none;
    font-size: clamp(0.9rem, 2vw, 1.2rem);
}

/* Hero Section */
.hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.hero-video .video-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.small-video {
    width: 100%;
    max-width: 500px;
    height: auto;
}

.hero-flayer img {
    width: 100%;
    max-width: 400px;
    height: auto;
}

/* Services Section */
.services-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
}

.service-card {
    background: #fff;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Doctors Section */
.doctor-container {
    position: relative;
    padding: 20px;
}

.doctor-row {
    display: flex;
    overflow-x: auto;
    gap: 15px;
    padding: 10px 0;
    scrollbar-width: none;
}

.doctor-row::-webkit-scrollbar {
    display: none;
}

.doctor-card {
    min-width: 150px;
    background: #fff;
    padding: 10px;
    border-radius: 10px;
    text-align: center;
}

.doctor-card img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
}

/* Scroll Buttons */
.scroll-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: #007BFF;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
}

#prevBtn { left: 0; }
#nextBtn { right: 0; }

/* Form and Other Sections */
form, .container {
    max-width: 90%;
    margin: 20px auto;
    padding: 15px;
}

form input, button {
    width: 100%;
    margin: 5px 0;
}

/* Footer */
footer {
    padding: 10px;
    text-align: center;
}

/* Media Queries* Media Queries */
@media (max-width: 768px) {
    .header-container {
        flex-direction: column;
        text-align: center;
    }

    .menu ul {
        flex-direction: column;
        align-items: center;
    }

    .doctor-card {
        min-width: 120px;
    }

    .news-links {
        flex-direction: column;
        gap: 10px;
    }

    .services-list {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .text h1 {
        font-size: 1.2rem;
    }

    .doctor-card img {
        width: 60px;
        height: 60px;
    }

    .btn {
        font-size: 0.9rem;
    }
}