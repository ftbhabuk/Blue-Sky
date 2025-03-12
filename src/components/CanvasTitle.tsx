"use client";

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

      // Draw the "stitched-on" paper pieces for title
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

      // Draw chapter paper with slightly different color
      context.fillStyle = "#e8e8e0";
      context.fillRect(
        chapterPaperX,
        chapterPaperY,
        chapterPaperWidth,
        chapterPaperHeight
      );

      // Add slight rotation to chapter paper for handmade feel
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

      // "Stitch" marks on corners of chapter paper
      const drawStitch = (x: number, y: number, length: number, angle: number) => {
        context.save();
        context.translate(x, y);
        context.rotate(angle);

        // Draw the stitch line
        context.beginPath();
        context.moveTo(-length / 2, 0);
        context.lineTo(length / 2, 0);
        context.strokeStyle = "#555";
        context.lineWidth = 1;
        context.stroke();

        // Draw the cross stitches
        for (let i = -length / 2 + 2; i <= length / 2 - 2; i += 4) {
          context.beginPath();
          context.moveTo(i, -2);
          context.lineTo(i, 2);
          context.stroke();
        }

        context.restore();
      };

      // Draw stitches at corners of chapter paper
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

      // Main title bandage/tape style
      const titlePaperHeight = 75;
      const titlePaperWidth = 220;
      const titlePaperX = 50;
      const titlePaperY = 110;

      // Draw bandage-like paper for title
      context.save();

      // Add slight rotation for handmade feel
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

      // Draw bandage with off-white color
      context.fillStyle = "#f8f8f2";
      context.fillRect(
        titlePaperX,
        titlePaperY,
        titlePaperWidth,
        titlePaperHeight
      );

      // Add texture to the bandage paper
      for (let i = 0; i < (titlePaperWidth * titlePaperHeight) / 10; i++) {
        const x = titlePaperX + Math.random() * titlePaperWidth;
        const y = titlePaperY + Math.random() * titlePaperHeight;
        context.fillStyle = `rgba(0, 0, 0, ${Math.random() * 0.03})`;
        context.fillRect(x, y, 1, 1);
      }

      // Add torn edges to bandage
      context.strokeStyle = "#f8f8f2";
      context.lineWidth = 4;

      // Top edge tears
      context.beginPath();
      context.moveTo(titlePaperX, titlePaperY);
      for (let x = titlePaperX; x <= titlePaperX + titlePaperWidth; x += 10) {
        const tearHeight = Math.random() * 4 - 2;
        context.lineTo(x + 10, titlePaperY + tearHeight);
      }
      context.stroke();

      // Bottom edge tears
      context.beginPath();
      context.moveTo(titlePaperX, titlePaperY + titlePaperHeight);
      for (let x = titlePaperX; x <= titlePaperX + titlePaperWidth; x += 10) {
        const tearHeight = Math.random() * 4 - 2;
        context.lineTo(x + 10, titlePaperY + titlePaperHeight + tearHeight);
      }
      context.stroke();

      // Draw title text
      context.font = "bold 38px 'IM Fell English', Georgia, serif";
      context.fillStyle = "#222";
      context.textAlign = "center";
      context.fillText(
        title,
        titlePaperX + titlePaperWidth / 2,
        titlePaperY + 48
      );

      // Add tape at corners of title paper
      const drawTape = (x: number, y: number, width: number, height: number, angle: number) => {
        context.save();
        context.translate(x, y);
        context.rotate(angle);

        // Draw tape with translucent effect
        context.fillStyle = "rgba(255, 255, 255, 0.7)";
        context.fillRect(-width / 2, -height / 2, width, height);

        // Add tape texture/lines
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

      // Draw tape at corners of title paper
      drawTape(titlePaperX, titlePaperY, 40, 20, Math.PI / 4);
      drawTape(
        titlePaperX + titlePaperWidth,
        titlePaperY,
        40,
        20,
        -Math.PI / 4
      );
      drawTape(
        titlePaperX,
        titlePaperY + titlePaperHeight,
        40,
        20,
        -Math.PI / 4
      );
      drawTape(
        titlePaperX + titlePaperWidth,
        titlePaperY + titlePaperHeight,
        40,
        20,
        Math.PI / 4
      );

      context.restore();

      // Add some small torn paper pieces scattered around
      for (let i = 0; i < 5; i++) {
        const scratchX = Math.random() * (canvas.width - 100) + 50;
        const scratchY = Math.random() * (canvas.height - 100) + 50;
        const scratchWidth = 20 + Math.random() * 30;
        const scratchHeight = 5 + Math.random() * 15;
        const scratchRotation = Math.random() * Math.PI;

        context.save();
        context.translate(scratchX, scratchY);
        context.rotate(scratchRotation);

        // Draw shadow
        context.fillStyle = "rgba(0, 0, 0, 0.1)";
        context.fillRect(
          -scratchWidth / 2 + 2,
          -scratchHeight / 2 + 2,
          scratchWidth,
          scratchHeight
        );

        // Draw paper scrap
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
