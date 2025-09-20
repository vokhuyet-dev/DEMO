// Fireworks animation
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

const fireworks = [];
const particles = [];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

class Firework {
  constructor() {
    this.x = random(w * 0.2, w * 0.8);
    this.y = h;
    this.targetY = random(h * 0.2, h * 0.5);
    this.speed = random(4, 7);
    this.done = false;
  }

  update() {
    this.y -= this.speed;
    if (this.y <= this.targetY) {
      this.done = true;
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle(this.x, this.y));
      }
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 2;
    this.alpha = 1;
    this.angle = random(0, 2 * Math.PI);
    this.speed = random(1, 5);
    this.gravity = 0.05;
    this.friction = 0.98;
    this.color = `hsl(${Math.floor(random(0, 360))}, 100%, 50%)`;
  }

  update() {
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed + this.gravity;
    this.speed *= this.friction;
    this.alpha -= 0.01;
  }

  draw() {
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

let animationId;
function animate() {
  ctx.fillStyle = "rgba(0,0,0,0.2)";
  ctx.fillRect(0, 0, w, h);

  if (Math.random() < 0.05) {
    fireworks.push(new Firework());
  }

  for (let i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].draw();
    if (fireworks[i].done) fireworks.splice(i, 1);
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].draw();
    if (particles[i].alpha <= 0) particles.splice(i, 1);
  }

  animationId = requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
});

// Welcome text animation
const ten = prompt("Nhập tên của bạn:") || "bạn";
const message = `Chào mừng ${ten}!`;
const letters = [];

for (let i = 0; i < message.length; i++) {
  const span = document.createElement("span");
  span.classList.add("letter");
  span.innerText = message[i];
  span.style.left = Math.random() * window.innerWidth + "px";
  span.style.top = window.innerHeight + "px";
  document.body.appendChild(span);
  letters.push(span);
}

setTimeout(() => {
  letters.forEach((span) => {
    span.style.opacity = 1;
    span.style.top = Math.random() * window.innerHeight * 0.3 + "px";
    span.style.left = Math.random() * window.innerWidth + "px";
  });
}, 500);

setTimeout(() => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  let totalWidth = message.length * 26;
  let startX = centerX - totalWidth / 2;

  letters.forEach((span, i) => {
    span.style.top = centerY + "px";
    span.style.left = (startX + i * 26) + "px";
  });
}, 2000);

setTimeout(() => {
  letters.forEach(span => span.remove());
  const finalText = document.getElementById("finalText");
  finalText.innerText = `🎉 Chào mừng ${ten}! 🎉`;
  finalText.style.opacity = 1;
}, 3500);

// Transition to main content after 15 seconds
setTimeout(() => {
  cancelAnimationFrame(animationId);
  document.getElementById("fireworks").style.display = "none";
  document.getElementById("finalText").style.display = "none";
  document.getElementById("mainContent").style.display = "block";
  document.body.style.overflow = "auto";
}, 15000);

// Profile page section switching
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
// Tạo các hạt particle cho background
function createParticles() {
  const sunBackground = document.querySelector('.sun-background');
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Kích thước ngẫu nhiên
    const size = Math.random() * 10 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Vị trí ngẫu nhiên
    const posX = Math.random() * 100;
    particle.style.left = `${posX}%`;
    
    // Độ trễ animation ngẫu nhiên
    particle.style.animationDelay = `${Math.random() * 15}s`;
    
    // Thời gian animation ngẫu nhiên
    const duration = Math.random() * 10 + 15;
    particle.style.animationDuration = `${duration}s`;
    
    sunBackground.appendChild(particle);
  }
}

// Hiển thị section được chọn
function showSection(sectionId) {
  // Ẩn tất cả các section
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  
  // Hiển thị section được chọn
  document.getElementById(sectionId).classList.add('active');
}

// Khởi tạo khi trang được tải
window.addEventListener('load', function() {
  createParticles();
});