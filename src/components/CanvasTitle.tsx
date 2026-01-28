"use client";

// for paper like texture for heading stuffs btw we havent used it yet 
// its kinda mid so
import React, { useEffect, useRef } from "react";

interface CanvasTitleProps {
  chapterNumber: number;
  title: string;
}

const CanvasTitle: React.FC<CanvasTitleProps> = ({ chapterNumber, title }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    canvas.width = window.innerWidth;
    canvas.height = 220;

    const drawCollageTitle = () => {
      // Base page background
      context.fillStyle = "#f5f5f0";
      context.fillRect(0, 0, canvas.width, canvas.height);

      // Add subtle texture to base page
      for (let i = 0; i < (canvas.width * canvas.height) / 100; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        context.fillStyle = `rgba(0, 0, 0, ${Math.random() * 0.03})`;
        context.fillRect(x, y, 1, 1);
      }

      // Chapter number paper strip
      const chapterPaperWidth = 180;
      const chapterPaperHeight = 50;
      const chapterPaperX = 30;
      const chapterPaperY = 40;

      // Draw shadow for chapter paper
      context.fillStyle = "rgba(0, 0, 0, 0.2)";
      context.fillRect(
        chapterPaperX + 3,
        chapterPaperY + 3,
        chapterPaperWidth,
        chapterPaperHeight
      );

      // Draw chapter paper
      context.fillStyle = "#e8e8e0";
      context.fillRect(
        chapterPaperX,
        chapterPaperY,
        chapterPaperWidth,
        chapterPaperHeight
      );

      // Add slight rotation to chapter paper
      context.save();
      context.translate(
        chapterPaperX + chapterPaperWidth / 2,
        chapterPaperY + chapterPaperHeight / 2
      );
      context.rotate((Math.PI / 180) * -2);
      context.translate(
        -(chapterPaperX + chapterPaperWidth / 2),
        -(chapterPaperY + chapterPaperHeight / 2)
      );

      // Stitch marks function
      const drawStitch = (x: number, y: number, length: number, angle: number) => {
        context.save();
        context.translate(x, y);
        context.rotate(angle);
        context.beginPath();
        context.moveTo(-length / 2, 0);
        context.lineTo(length / 2, 0);
        context.strokeStyle = "#555";
        context.lineWidth = 1;
        context.stroke();
        for (let i = -length / 2 + 2; i <= length / 2 - 2; i += 4) {
          context.beginPath();
          context.moveTo(i, -2);
          context.lineTo(i, 2);
          context.stroke();
        }
        context.restore();
      };

      // Draw stitches at corners
      drawStitch(chapterPaperX + 10, chapterPaperY + 10, 8, Math.PI / 4);
      drawStitch(
        chapterPaperX + chapterPaperWidth - 10,
        chapterPaperY + 10,
        8,
        -Math.PI / 4
      );
      drawStitch(
        chapterPaperX + 10,
        chapterPaperY + chapterPaperHeight - 10,
        8,
        -Math.PI / 4
      );
      drawStitch(
        chapterPaperX + chapterPaperWidth - 10,
        chapterPaperY + chapterPaperHeight - 10,
        8,
        Math.PI / 4
      );

      // Draw chapter text
      context.font = "italic 20px 'IM Fell English', Georgia, serif";
      context.fillStyle = "#333";
      context.textAlign = "center";
      context.fillText(
        `Chapter ${chapterNumber}`,
        chapterPaperX + chapterPaperWidth / 2,
        chapterPaperY + 32
      );
      context.restore();

      // Dynamic title paper width
      context.font = "bold 38px 'IM Fell English', Georgia, serif";
      const titleMetrics = context.measureText(title);
      const titlePaperWidth = Math.min(titleMetrics.width + 60, 400);
      const titlePaperHeight = 75;
      const titlePaperX = 50;
      const titlePaperY = 110;

      // Draw bandage-like paper for title
      context.save();
      context.translate(
        titlePaperX + titlePaperWidth / 2,
        titlePaperY + titlePaperHeight / 2
      );
      context.rotate((Math.PI / 180) * 2);
      context.translate(
        -(titlePaperX + titlePaperWidth / 2),
        -(titlePaperY + titlePaperHeight / 2)
      );

      // Draw shadow
      context.fillStyle = "rgba(0, 0, 0, 0.25)";
      context.fillRect(
        titlePaperX + 4,
        titlePaperY + 4,
        titlePaperWidth,
        titlePaperHeight
      );

      // Draw bandage
      context.fillStyle = "#f8f8f2";
      context.fillRect(
        titlePaperX,
        titlePaperY,
        titlePaperWidth,
        titlePaperHeight
      );

      // Add texture to bandage
      for (let i = 0; i < (titlePaperWidth * titlePaperHeight) / 10; i++) {
        const x = titlePaperX + Math.random() * titlePaperWidth;
        const y = titlePaperY + Math.random() * titlePaperHeight;
        context.fillStyle = `rgba(0, 0, 0, ${Math.random() * 0.03})`;
        context.fillRect(x, y, 1, 1);
      }

      // NEW: Natural hand-drawn line with 40% chance
      if (Math.random() < 0.4) { // 40% probability
        context.strokeStyle = "rgba(85, 85, 85, 0.7)"; // Slightly darker, natural gray
        context.lineWidth = 1 + Math.random() * 0.5; // Random thickness 1-1.5
        context.beginPath();
        const lineX = titlePaperX + 20; // Inset from left
        const lineY = titlePaperY + 62; // Below text, inside paper
        const lineWidth = titleMetrics.width + 20; // Match text width + padding
        context.moveTo(lineX, lineY);
        for (let x = lineX; x <= lineX + lineWidth; x += 5) {
          const dip = Math.random() * 2 - 1 + (Math.cos(x * 0.05) * 1.5); // Subtle random + cosine dip
          context.lineTo(x, lineY + dip);
        }
        context.stroke();
      }

      // Torn edges
      context.strokeStyle = "#f8f8f2";
      context.lineWidth = 4;
      context.beginPath();
      context.moveTo(titlePaperX, titlePaperY);
      for (let x = titlePaperX; x <= titlePaperX + titlePaperWidth; x += 10) {
        const tearHeight = Math.random() * 4 - 2;
        context.lineTo(x + 10, titlePaperY + tearHeight);
      }
      context.stroke();
      context.beginPath();
      context.moveTo(titlePaperX, titlePaperY + titlePaperHeight);
      for (let x = titlePaperX; x <= titlePaperX + titlePaperWidth; x += 10) {
        const tearHeight = Math.random() * 4 - 2;
        context.lineTo(x + 10, titlePaperY + titlePaperHeight + tearHeight);
      }
      context.stroke();

      // Draw title text (after line so it’s on top)
      context.fillStyle = "#222";
      context.textAlign = "center";
      context.fillText(
        title,
        titlePaperX + titlePaperWidth / 2,
        titlePaperY + 48
      );

      // Tape at corners
      const drawTape = (x: number, y: number, width: number, height: number, angle: number) => {
        context.save();
        context.translate(x, y);
        context.rotate(angle);
        context.fillStyle = "rgba(255, 255, 255, 0.7)";
        context.fillRect(-width / 2, -height / 2, width, height);
        context.strokeStyle = "rgba(0, 0, 0, 0.1)";
        context.lineWidth = 0.5;
        for (let i = -width / 2 + 5; i < width / 2; i += 5) {
          context.beginPath();
          context.moveTo(i, -height / 2);
          context.lineTo(i, height / 2);
          context.stroke();
        }
        context.restore();
      };

      drawTape(titlePaperX, titlePaperY, 40, 20, Math.PI / 4);
      drawTape(titlePaperX + titlePaperWidth, titlePaperY, 40, 20, -Math.PI / 4);
      drawTape(titlePaperX, titlePaperY + titlePaperHeight, 40, 20, -Math.PI / 4);
      drawTape(
        titlePaperX + titlePaperWidth,
        titlePaperY + titlePaperHeight,
        40,
        20,
        Math.PI / 4
      );
      context.restore();

      // Scattered paper scraps
      for (let i = 0; i < 5; i++) {
        const scratchX = Math.random() * (canvas.width - 100) + 50;
        const scratchY = Math.random() * (canvas.height - 100) + 50;
        const scratchWidth = 20 + Math.random() * 30;
        const scratchHeight = 5 + Math.random() * 15;
        const scratchRotation = Math.random() * Math.PI;

        context.save();
        context.translate(scratchX, scratchY);
        context.rotate(scratchRotation);
        context.fillStyle = "rgba(0, 0, 0, 0.1)";
        context.fillRect(
          -scratchWidth / 2 + 2,
          -scratchHeight / 2 + 2,
          scratchWidth,
          scratchHeight
        );
        context.fillStyle = `rgba(${
          220 + Math.random() * 35
        }, ${220 + Math.random() * 35}, ${210 + Math.random() * 35}, 0.8)`;
        context.fillRect(
          -scratchWidth / 2,
          -scratchHeight / 2,
          scratchWidth,
          scratchHeight
        );
        context.restore();
      }
    };

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = 220;
      drawCollageTitle();
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Fade-in animation
    canvas.style.opacity = "0";
    setTimeout(() => {
      canvas.style.transition = "opacity 0.8s ease-in";
      canvas.style.opacity = "1";
    }, 100);

    return () => window.removeEventListener("resize", resizeCanvas);
  }, [chapterNumber, title]);

  return (
    <div className="relative w-full h-[220px] mb-8">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default CanvasTitle;