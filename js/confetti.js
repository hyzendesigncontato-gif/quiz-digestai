// Sistema de confetes usando Canvas - Versão Simplificada
(function() {
    'use strict';
    
    const Confetti = {
        canvas: null,
        ctx: null,
        particles: [],
        animationId: null,
        
        init() {
            console.log('Confetti: Inicializando...');
            
            // Remove canvas anterior se existir
            const oldCanvas = document.getElementById('confetti-canvas');
            if (oldCanvas) {
                oldCanvas.remove();
            }
            
            // Cria canvas
            this.canvas = document.createElement('canvas');
            this.canvas.id = 'confetti-canvas';
            this.canvas.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: 9999;
            `;
            document.body.appendChild(this.canvas);
            
            this.ctx = this.canvas.getContext('2d');
            this.resize();
            
            window.addEventListener('resize', () => this.resize());
            console.log('Confetti: Canvas criado!');
        },
        
        resize() {
            if (this.canvas) {
                this.canvas.width = window.innerWidth;
                this.canvas.height = window.innerHeight;
            }
        },
        
        createParticle() {
            const colors = ['#28a745', '#2b883f', '#FFD700', '#FF6347', '#4169E1', '#FF69B4', '#FFA500'];
            const width = this.canvas ? this.canvas.width : window.innerWidth;
            
            return {
                x: Math.random() * width,
                y: -20,
                vx: (Math.random() - 0.5) * 6,
                vy: Math.random() * 4 + 3,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 15,
                size: Math.random() * 10 + 5,
                color: colors[Math.floor(Math.random() * colors.length)],
                opacity: 1,
                shape: Math.random() > 0.5 ? 'square' : 'circle'
            };
        },
        
        launch() {
            console.log('Confetti: Lançando confetes!');
            
            if (!this.canvas) {
                this.init();
            }
            
            // Limpa partículas antigas
            this.particles = [];
            
            // Cria 200 partículas IMEDIATAMENTE
            for (let i = 0; i < 200; i++) {
                this.particles.push(this.createParticle());
            }
            
            console.log('Confetti: ' + this.particles.length + ' partículas criadas');
            
            if (!this.animationId) {
                this.animate();
            }
        },
        
        animate() {
            if (!this.canvas || !this.ctx) return;
            
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            
            for (let i = this.particles.length - 1; i >= 0; i--) {
                const p = this.particles[i];
                
                // Atualiza posição
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.15; // Gravidade
                p.rotation += p.rotationSpeed;
                p.opacity -= 0.004;
                
                // Remove se saiu da tela ou ficou invisível
                if (p.y > this.canvas.height + 50 || p.opacity <= 0) {
                    this.particles.splice(i, 1);
                    continue;
                }
                
                // Desenha
                this.ctx.save();
                this.ctx.translate(p.x, p.y);
                this.ctx.rotate(p.rotation * Math.PI / 180);
                this.ctx.globalAlpha = p.opacity;
                this.ctx.fillStyle = p.color;
                
                if (p.shape === 'circle') {
                    this.ctx.beginPath();
                    this.ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
                    this.ctx.fill();
                } else {
                    this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
                }
                
                this.ctx.restore();
            }
            
            if (this.particles.length > 0) {
                this.animationId = requestAnimationFrame(() => this.animate());
            } else {
                this.animationId = null;
                console.log('Confetti: Animação finalizada');
                
                // Remove canvas após animação
                setTimeout(() => {
                    if (this.particles.length === 0 && this.canvas) {
                        this.canvas.remove();
                        this.canvas = null;
                        console.log('Confetti: Canvas removido');
                    }
                }, 1000);
            }
        }
    };
    
    // Exporta para window
    window.Confetti = Confetti;
    console.log('Confetti: Script carregado!');
})();
