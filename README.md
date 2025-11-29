# 🍞 Master Baker - Filipino Bakery

![Master Baker](https://img.shields.io/badge/Master-Baker-gold) ![Filipino Bakery](https://img.shields.io/badge/Filipino-Bakery-orange) ![Responsive Design](https://img.shields.io/badge/Responsive-Design-green)

## 📋 Table of Contents
- [Project Overview](#-project-overview)
- [✨ Features](#-features)
- [👨‍💻 Development Team](#-development-team)
- [🛠️ System Architecture](#️-system-architecture)
- [🚀 Installation & Setup](#-installation--setup)
- [📱 System Management](#-system-management)
- [🎨 Design System](#-design-system)
- [🔧 Technical Implementation](#-technical-implementation)
- [📞 Support](#-support)

## 🏢 Project Overview

**Master Baker** is a sophisticated e-commerce platform for an authentic Filipino bakery, showcasing traditional breads and pastries with modern web technologies. The system combines elegant design with robust functionality to deliver an exceptional user experience.

### 🌟 Key Highlights
- **Traditional Filipino Breads**: Pandesal, Ensaymada, Pan de Coco, and more
- **Modern E-commerce**: Shopping cart, user authentication, and contact forms
- **Responsive Design**: Optimized for all devices
- **Professional Branding**: Cohesive visual identity and user experience

## ✨ Features

### 🎯 Core Functionality
| Feature | Description | Status |
|---------|-------------|---------|
| **Product Catalog** | Showcase 11+ traditional Filipino breads | ✅ Live |
| **Shopping Cart** | Add, remove, and manage items with real-time updates | ✅ Live |
| **User Authentication** | Login/Register modal system | ✅ Live |
| **Contact Integration** | EmailJS-powered contact forms | ✅ Live |
| **Responsive Design** | Mobile-first approach | ✅ Live |

### 🎨 User Experience
- **Smooth Animations**: CSS transitions and keyframe animations
- **Interactive Elements**: Hover effects, modal systems, and dynamic content
- **Professional Typography**: Google Fonts integration (Poppins, Dancing Script)
- **Visual Hierarchy**: Clear section organization and intuitive navigation


### 🎖️ Project Lead & Web Developer
**Dave Fuentes**
- Role: Head Developer & System Architect
- Contributions: Core architecture, JavaScript functionality, project management
- Expertise: Frontend development, UX/UI design, system integration

### 👥 Development Team Members
BORQUETA, KARL
DOMINGUEZ, ANDY RAFAEL
TOLEDO, CHRISTIAN DAVID

### 🏆 Team Philosophy
Our team combines traditional Filipino baking heritage with modern web development practices, creating a digital experience that honors culinary traditions while embracing technological innovation.

## 🛠️ System Architecture

### 📁 Project Structure
```
MasterBakery/
├── 📄 index.html          # Landing/Intro page
├── 🏠 home.html           # Main application
├── 🎨 style.css           # Comprehensive styling
├── ⚡ script.js           # Core functionality
├── 📧 emailjs-init.js    # Email service integration
├── 📸 assets/            # Images and media files
└── 📋 README.md          # Project documentation
```

### 🔌 Technology Stack
| Layer | Technology | Purpose |
|-------|------------|---------|
| **Frontend** | HTML5, CSS3, JavaScript | User interface and interactions |
| **Styling** | CSS Grid, Flexbox, CSS Variables | Responsive layout and design system |
| **Fonts** | Google Fonts (Poppins, Dancing Script) | Typography and brand identity |
| **Icons** | Font Awesome 6.4.0 | UI icons and visual elements |
| **Email Service** | EmailJS | Contact form functionality |
| **Maps** | Google Maps Embed API | Location display |

## 🚀 Installation & Setup

### 📥 Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Web server for local development (optional)
- Basic understanding of HTML/CSS/JavaScript

### 🛠️ Local Development Setup

1. **Clone Repository**
   ```bash
   git clone https://github.com/your-username/MasterBakery.git
   cd MasterBakery
   ```

2. **File Structure Verification**
   Ensure all required files are present:
   - `index.html` - Landing page
   - `home.html` - Main application
   - `style.css` - Styling
   - `script.js` - Functionality
   - `emailjs-init.js` - Email services

3. **Local Server Setup** (Recommended)
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

4. **Access Application**
   Open `http://localhost:8000` in your browser

### ⚙️ Configuration

#### EmailJS Setup (For Contact Forms)
1. Create EmailJS account at [https://www.emailjs.com/](https://www.emailjs.com/)
2. Update credentials in `emailjs-init.js`:
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");
   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData);
   ```

## 📱 System Management

### 🗂️ Content Management

#### Product Management
```javascript
// Adding new products - Update in home.html
<div class="delight-card">
    <div class="delight-image-container">
        <img src="new_bread.jpg" alt="New Bread" class="delight-image">
    </div>
    <div class="delight-content">
        <h3>New Bread Name</h3>
        <p>Product description...</p>
        <div class="card-footer">
            <div class="price-rating">
                <p class="price">12.50</p>
                <div class="rating">
                    <!-- Star ratings -->
                </div>
            </div>
            <div class="action-buttons">
                <button class="buy-now">Buy Now</button>
                <button class="add-to-cart" data-id="12" data-name="New Bread" 
                        data-price="12.50" data-image="new_bread.jpg">
                    Add to Cart
                </button>
            </div>
        </div>
    </div>
</div>
```

#### Team Management
Update team members in the About section:
```html
<div class="team-member">
    <div class="member-image" onclick="this.classList.toggle('active')">
        <img src="new_member.jpg" class="default-image">
        <img src="new_member_hover.jpg" class="hover-image">
    </div>
    <h3>New Team Member</h3>
    <p class="member-role">Position</p>
    <p>Description...</p>
</div>
```

### 🎨 Styling Management

#### Color System
Update CSS variables in `:root`:
```css
:root {
    --gold: #e6c200;
    --gold-light: #f8e98c;
    --gold-dark: #d4b000;
    --charcoal: #2a2a2a;
    /* Add new colors as needed */
}
```

#### Responsive Breakpoints
```css
/* Mobile First Approach */
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 992px) { /* Desktop */ }
@media (min-width: 1200px) { /* Large Desktop */ }
```

### 🔧 Functional Management

#### Cart System
The shopping cart uses localStorage-like functionality:
```javascript
// Cart operations
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Add item to cart array
        // Update cart display
        // Persist cart state
    });
});
```

#### Modal Management
```javascript
// Opening modals
userIcon.addEventListener('click', () => {
    loginModal.classList.add('active');
});

// Closing modals
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.classList.remove('active');
    });
});
```

## 🎨 Design System

### 🎯 Brand Identity
- **Primary Color**: Gold (#e6c200) - Represents warmth and quality
- **Secondary Color**: Charcoal (#2a2a2a) - Professional and elegant
- **Accent Colors**: Warm beige and cream tones
- **Typography**: Poppins (body), Dancing Script (headings)

### 📐 Layout Principles
- **Grid Systems**: CSS Grid for product layouts
- **Flexbox**: Component alignment and responsive behavior
- **Spacing**: Consistent padding and margin system
- **Shadows**: Layered shadow system for depth

### 🔄 Animations & Interactions
```css
/* Standard transition */
--transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

/* Hover effects */
.card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-hover);
}
```

## 🔧 Technical Implementation

### 🏗️ Component Architecture

#### Product Cards
- **Image Container**: Responsive image handling with hover effects
- **Content Area**: Product information and pricing
- **Action Buttons**: Buy Now and Add to Cart functionality
- **Rating System**: Star-based rating display

#### Navigation System
- **Sticky Header**: Becomes compact on scroll
- **Mobile Menu**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Anchor link navigation

### 📧 Email Integration
```javascript
// Contact form handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = {
        from_name: document.getElementById('contact-name').value,
        from_email: document.getElementById('contact-email').value,
        subject: document.getElementById('contact-subject').value,
        message: document.getElementById('contact-message').value
    };
    
    emailjs.send('service_id', 'template_id', formData)
        .then(function(response) {
            alert('Message sent successfully!');
        });
});
```

### 🛒 E-commerce Features

#### Cart Management
- **Add Items**: Product data attributes for easy cart addition
- **Quantity Control**: Increase/decrease item quantities
- **Remove Items**: Individual item removal with confirmation
- **Total Calculation**: Real-time price updates

#### User Experience
- **Instant Feedback**: Alert messages for user actions
- **Confirmation Dialogs**: Important action confirmations
- **Loading States**: Smooth transitions and animations

## 📞 Support

### 🐛 Issue Reporting
For technical issues or feature requests, please contact:
- **Dave Fuentes**: Lead Developer
- **Email**: [Your contact email]
- **Response Time**: 24-48 hours

### 📚 Documentation
- This README file
- Inline code comments
- CSS variable documentation in style.css

### 🔄 Updates & Maintenance
- Regular security updates
- Browser compatibility testing
- Performance optimization
- Feature enhancements based on user feedback

---

<div align="center">

**🍞 Crafted with Passion, Baked with Excellence**  
*Master Baker - Bringing Filipino Baking Traditions to the Digital World*

*Last Updated: March 2025*  
*Version: 1.0.0*

</div>
