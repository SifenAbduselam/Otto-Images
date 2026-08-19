// src/config/media.js
//
// Central place for every TEMPORARY local asset used by the redesign.
// Swap any path below to replace an image/video anywhere on the site —
// no component code needs to change.
//
// NOTE: this file is only for the new redesigned visual sections
// (hero, story/intro, video showcase, about portrait). The gallery
// pages (Gallery.jsx / CategoryPage.jsx) intentionally keep loading
// images from Cloudinary via src/utils/fetchImages.js — do not point
// those at this file.

// ---------------------------------------------------------------------
// HERO — two independently-cycling image panels (desktop: side by side)
// ---------------------------------------------------------------------
export const heroImagesLeft = [
  "/images/w1.jpg",
  "/images/w11.jpg",
  "/images/w14.jpg",
  "/images/w27.jpg",
];

export const heroImagesRight = [
  "/images/w9.jpg",
  "/images/w16.jpg",
  "/images/w233.png",
  "/images/w28.jpg",
];

// How long each image stays on screen before crossfading, in ms.
// Left/right are offset on purpose so the two panels never change together.
export const heroIntervalMs = {
  left: 6000,
  right: 7200,
};

// ---------------------------------------------------------------------
// STORY / INTRO SECTION — small supporting background/texture image
// ---------------------------------------------------------------------
export const storyImage = "/images/w15.jpg";

// ---------------------------------------------------------------------
// CINEMATIC VIDEO SHOWCASE — ~4 rotating local videos
// ---------------------------------------------------------------------
// All four currently point at the same source video as a placeholder.
// Replace public/videos/video-01.mp4 ... video-04.mp4 with four real
// clips later — the paths below never need to change.
export const showcaseVideos = [
  "/videos/video-01.mp4",
  "/videos/video-02.mp4",
  "/videos/video-03.mp4",
  "/videos/video-04.mp4",
];

export const videoIntervalMs = 9000;

// ---------------------------------------------------------------------
// ABOUT — "Meet Camila"-inspired portrait section
// ---------------------------------------------------------------------
export const aboutPortraitImage = "/images/w25.jpg";
export const aboutSecondaryImage = "/images/ww.jpg";
