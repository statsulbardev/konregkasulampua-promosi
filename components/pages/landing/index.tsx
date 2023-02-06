import React from "react";
import Head from "next/head";
import Link from "next/link";

import cn from "classnames";
import { motion } from "framer-motion";

import { HeroBackground } from "./HeroBackground";
import { FadeIn } from "../home-shared/FadeIn";
import { LandingPageGlobalStyles } from "../home-shared/GlobalStyles";
import styles from "./index.module.css";

function Background() {
    return (
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div
          className={cn(
            "z-[-1] absolute w-full h-full [--gradient-stop-1:60%] [--gradient-stop-2:85%] lg:[--gradient-stop-1:50%] lg:[--gradient-stop-2:90%]",
            "[--gradient-color-1=rgba(0,0,0,1)] [--gradient-color-2=rgba(0,0,0,0.8)] [--gradient-color-3=rgba(0,0,0,0)]",
            "dark:[--gradient-color-1=rgba(255,255,255,1)] dark:[--gradient-color-2=rgba(255,255,255,0.8)] dark:[--gradient-color-3=rgba(255,255,255,0)]"
          )}
          style={{
            background:
              "linear-gradient(180deg, var(--gradient-color-1) 0%, var(--gradient-color-2) var(--gradient-stop-1), var(--gradient-color-3) var(--gradient-stop-2), 100% transparent)",
          }}
        />
        <span className={cn(styles.leftLights, "opacity-50 dark:opacity-100")} />
        <span className={cn(styles.rightLights, "opacity-50 dark:opacity-100")} />
        <span className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t dark:from-black from-white to-transparent" />
        <span className="bg-gradient-to-b dark:from-black from-white to-transparent absolute top-[20vh] left-0 w-full h-[50vh]" />
        <HeroBackground />
      </div>
    );
  }

  function LandingPage() {
    return (
      <>
        <LandingPageGlobalStyles />
        <main className="relative flex flex-col items-center justify-center w-full h-full  overflow-hidden [--geist-foreground:#fff] dark:[--geist-foreground:#000] [--gradient-stop-1:0px] [--gradient-stop-2:120px] sm:[--gradient-stop-1:0px] sm:[--gradient-stop-2:120px]">
          <Background />
          <FadeIn className="z-10 flex flex-col items-center justify-center w-full h-full">
            <h1 className="mt-12 lg:!mt-20 mx-6 w-[300px] md:!w-full font-light text-4xl lg:text-5xl leading-tight text-center mb-0 bg-clip-text bg-gradient-to-b from-black/80 to-black dark:from-white dark:to-[#AAAAAA]">
              Konsultasi Regional PDRB
            </h1>
            <span className="flex text-center mx-auto items-center justify-center p-4 mt-0 mb-0 sm:mb-0 lg:mt-0 sm:w-full md:w-3/4 lg:w-1/2 xl:2-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 292.448 59.908">
                    <g transform="translate(185.493 -85.713)">
                        <path d="M287.803 29.27c-2.972 0-5.73.571-8.272 1.714a23.185 23.185 0 0 0-6.554 4.631c-1.829 1.943-3.31 4.229-4.446 6.858-1.041 2.514-1.538 5.2-1.49 8.058l.572 102.192c2.858 0 5.557-.572 8.098-1.715 2.541-1.143 4.726-2.686 6.555-4.63a20.436 20.436 0 0 0 4.476-6.687c1.156-2.514 1.701-5.258 1.633-8.23l-.066-20.746h14.746c2.629 0 4.915.97 6.86 2.914 1.943 1.943 2.917 4.23 2.925 6.86l-.008 10.63c-.046 2.972.506 5.771 1.656 8.4a22.313 22.313 0 0 0 4.612 6.688 24.175 24.175 0 0 0 6.619 4.459c2.602 1.143 5.39 1.715 8.361 1.715h11.145c1.943 0 3.537-.687 4.78-2.059 1.359-1.371 2.037-3.03 2.036-4.972h-8.744c-2.65-.115-4.936-1.086-6.86-2.914-1.809-1.83-2.661-4.059-2.554-6.688l-.194-10.803c.02-3.772-.93-7.2-2.847-10.287-1.823-3.2-4.221-5.771-7.194-7.715 2.743-1.943 4.938-4.4 6.584-7.373 1.74-3.086 2.573-6.459 2.498-10.117l-.146-23.146c-2.858 0-5.558.571-8.1 1.714a22.435 22.435 0 0 0-6.724 4.63c-1.829 1.943-3.312 4.228-4.447 6.857-1.042 2.515-1.539 5.203-1.49 8.06l-.05 6.514c.008 2.63-.902 4.916-2.73 6.86-1.849 1.828-4.088 2.744-6.717 2.744h-14.06l-.463-74.416zm322.69 0c-2.859 0-5.557.571-8.098 1.714a22.45 22.45 0 0 0-6.727 4.631c-1.828 1.943-3.312 4.229-4.447 6.858-1.042 2.514-1.538 5.2-1.49 8.058l.527 80.588c-.046 2.972.506 5.771 1.656 8.4a22.312 22.312 0 0 0 4.611 6.688 24.165 24.165 0 0 0 6.618 4.459c2.602 1.143 5.389 1.715 8.36 1.715h18.518c1.944 0 3.538-.687 4.782-2.059 1.358-1.371 2.035-3.03 2.035-4.972h-15.945c-2.63 0-4.907-.914-6.83-2.743-1.944-1.943-2.861-4.23-2.754-6.859l-.817-106.478zm-84.5 37.037c-2.859 0-5.56.571-8.1 1.714a22.435 22.435 0 0 0-6.725 4.63c-1.828 1.943-3.312 4.228-4.447 6.857-1.042 2.515-1.538 5.203-1.49 8.06l.324 43.551c-.046 2.972.505 5.771 1.656 8.4a22.311 22.311 0 0 0 4.611 6.688 26.957 26.957 0 0 0 6.79 4.459c2.602 1.143 5.39 1.715 8.363 1.715h22.802c2.972 0 5.263-.63 6.87-1.887 1.72-1.257 2.782-2.687 3.185-4.287 1.09 2.286 2.688 3.886 4.793 4.8 2.22.915 4.414 1.374 6.586 1.374h12.002c1.943 0 3.593-.687 4.951-2.059 1.358-1.371 1.98-3.03 1.865-4.972h-8.402c-2.743 0-5.086-.971-7.03-2.914-1.829-1.944-2.748-4.23-2.755-6.86l-.412-69.27c-2.972 0-5.728.572-8.27 1.715a23.179 23.179 0 0 0-6.555 4.63c-1.828 1.943-3.311 4.228-4.447 6.857-1.041 2.515-1.538 5.203-1.49 8.06l.205 45.78c-.026 3.086-.733 5.887-2.117 8.402-1.29 2.4-3.764 3.6-7.422 3.6h-5.145c-2.629 0-4.904-.914-6.828-2.743-1.943-1.943-2.862-4.23-2.756-6.859l-.613-69.441zm429.339 0c-2.858 0-5.556.571-8.098 1.714a22.444 22.444 0 0 0-6.726 4.63c-1.829 1.943-3.312 4.228-4.447 6.857-1.042 2.515-1.539 5.203-1.49 8.06l.324 43.551c-.047 2.972.507 5.771 1.658 8.4a22.306 22.306 0 0 0 4.61 6.688 26.958 26.958 0 0 0 6.788 4.459c2.603 1.143 5.391 1.715 8.363 1.715h22.803c2.972 0 5.263-.63 6.87-1.887 1.72-1.257 2.782-2.687 3.185-4.287 1.09 2.286 2.688 3.886 4.793 4.8 2.219.915 4.414 1.374 6.586 1.374h12.002c1.943 0 3.593-.687 4.95-2.059 1.359-1.371 1.981-3.03 1.866-4.972h-8.402c-2.744 0-5.086-.971-7.03-2.914-1.829-1.944-2.748-4.23-2.755-6.86l-.413-69.27c-2.971 0-5.728.572-8.269 1.715a23.179 23.179 0 0 0-6.555 4.63c-1.828 1.943-3.311 4.228-4.447 6.857-1.041 2.515-1.538 5.203-1.49 8.06l.205 45.78c-.026 3.086-.733 5.887-2.117 8.402-1.29 2.4-3.764 3.6-7.422 3.6h-5.143c-2.629 0-4.906-.914-6.83-2.743-1.944-1.943-2.863-4.23-2.756-6.859l-.613-69.441zm-582.223.341c-2.972 0-5.728.572-8.27 1.715a22.45 22.45 0 0 0-6.726 4.631c-1.963 1.83-3.513 4.057-4.648 6.686a21.518 21.518 0 0 0-1.46 8.23l.265 43.21c-.047 2.971.505 5.77 1.656 8.4a22.312 22.312 0 0 0 4.611 6.687c1.924 1.829 4.187 3.316 6.79 4.459 2.602 1.143 5.388 1.715 8.36 1.715h22.805c2.972 0 5.26-.63 6.867-1.887 1.721-1.257 2.783-2.687 3.186-4.287 1.09 2.286 2.688 3.886 4.793 4.8 2.22.915 4.414 1.374 6.586 1.374h12.002c1.943 0 3.595-.687 4.953-2.059 1.358-1.371 1.978-3.03 1.863-4.972h-8.4c-2.744 0-5.088-.971-7.031-2.914-1.83-1.944-2.749-4.23-2.756-6.86l-.352-68.928H373.11zm84.702 0c-7.43 0-12.802 1.944-16.116 5.83-3.334 3.773-5 8.573-4.998 14.403l.162 4.8c-.046 2.973.506 5.774 1.657 8.403a22.312 22.312 0 0 0 4.611 6.687 22.787 22.787 0 0 0 6.648 4.63c2.583 1.028 5.358 1.542 8.33 1.542h9.774c2.65.115 4.89 1.143 6.719 3.086 1.923 1.83 2.889 4.059 2.896 6.688l.074 13.031c.008 2.63-.913 4.859-2.761 6.688-1.735 1.828-3.907 2.8-6.516 2.914h-28.977c.001 1.943.695 3.6 2.08 4.972 1.386 1.372 3.05 2.059 4.993 2.059h31.035c2.858 0 5.556-.572 8.098-1.715 2.655-1.143 4.964-2.63 6.927-4.459a20.436 20.436 0 0 0 4.477-6.687c1.135-2.63 1.67-5.429 1.601-8.4l-.011-3.944a21.218 21.218 0 0 0-1.797-8.23c-1.036-2.63-2.574-4.86-4.612-6.688-1.943-1.943-4.215-3.486-6.818-4.63a20.155 20.155 0 0 0-8.191-1.714h-9.774c-2.629 0-4.904-.915-6.828-2.744-1.83-1.943-2.748-4.228-2.756-6.858l-.074-13.03c-.007-2.63.913-4.86 2.762-6.688 1.848-1.83 4.076-2.8 6.685-2.914h25.377c0-1.944-.692-3.601-2.078-4.973-1.385-1.372-3.05-2.059-4.994-2.059h-27.605zm200.095 0c-2.972 0-5.728.572-8.27 1.715a22.45 22.45 0 0 0-6.726 4.631c-1.963 1.83-3.51 4.057-4.646 6.686a21.52 21.52 0 0 0-1.461 8.23l.263 43.21c-.046 2.971.506 5.77 1.657 8.4a22.312 22.312 0 0 0 4.611 6.687c1.924 1.829 4.187 3.316 6.79 4.459 2.602 1.143 5.388 1.715 8.36 1.715h22.805c2.972 0 5.263-.63 6.87-1.887 1.72-1.257 2.782-2.687 3.185-4.287 1.09 2.286 2.686 3.886 4.79 4.8 2.22.915 4.417 1.374 6.589 1.374h12.002c1.943 0 3.593-.687 4.95-2.059 1.359-1.371 1.98-3.03 1.866-4.972h-8.402c-2.744 0-5.088-.971-7.032-2.914-1.829-1.944-2.746-4.23-2.753-6.86l-.352-68.928h-45.096zm66.7 0 .638 86.075c2.858 0 5.556-.572 8.098-1.715 2.541-1.143 4.726-2.686 6.554-4.63a20.436 20.436 0 0 0 4.477-6.687c1.156-2.514 1.7-5.258 1.633-8.23l-.27-57.781h14.746c2.63 0 4.916.97 6.86 2.914 1.923 1.829 2.831 4.058 2.724 6.687l.444 69.442c2.857 0 5.558-.572 8.1-1.715 2.54-1.143 4.724-2.686 6.552-4.63a20.436 20.436 0 0 0 4.477-6.687c1.156-2.514 1.758-5.258 1.804-8.23l-.287-48.18c-.007-2.629.913-4.858 2.762-6.687 1.828-1.943 4.058-2.914 6.687-2.914h5.143c2.63 0 4.916.97 6.86 2.914 1.923 1.829 2.888 4.058 2.896 6.687l.195 47.666c.068 2.972.678 5.774 1.828 8.403a22.304 22.304 0 0 0 4.612 6.685 22.784 22.784 0 0 0 6.646 4.631c2.603 1.143 5.391 1.715 8.363 1.715h10.973c1.923-.114 3.573-.801 4.951-2.059 1.358-1.371 2.038-3.03 2.037-4.972h-8.916c-2.629 0-4.858-.971-6.687-2.914-1.83-1.944-2.749-4.23-2.756-6.86l-.195-47.666a21.22 21.22 0 0 0-1.797-8.23c-1.15-2.63-2.688-4.857-4.612-6.686-1.943-1.943-4.215-3.488-6.818-4.63a20.155 20.155 0 0 0-8.191-1.716h-23.832c-4.001 0-7.603.973-10.803 2.916-3.201-1.943-6.802-2.916-10.803-2.916h-45.094zm131.167 0 .579 85.733.136 22.117c2.858 0 5.559-.572 8.1-1.715 2.541-1.143 4.726-2.685 6.555-4.629a20.43 20.43 0 0 0 4.474-6.687c1.156-2.515 1.701-5.259 1.633-8.23l.02-.856h24.347c2.858 0 5.558-.572 8.1-1.715 2.655-1.143 4.907-2.63 6.756-4.459a20.435 20.435 0 0 0 4.476-6.687c1.136-2.63 1.67-5.429 1.602-8.4l-.266-43.21c-.136-5.944-2.203-10.86-6.205-14.746-4.022-4-8.921-6.173-14.697-6.516h-45.61zm184.664 0c-2.971 0-5.728.572-8.269 1.715a22.45 22.45 0 0 0-6.727 4.631c-1.962 1.83-3.512 4.057-4.648 6.686a21.517 21.517 0 0 0-1.459 8.23l.264 43.21c-.047 2.971.505 5.77 1.656 8.4a22.313 22.313 0 0 0 4.611 6.687c1.924 1.829 4.187 3.316 6.79 4.459 2.602 1.143 5.389 1.715 8.36 1.715h22.805c2.972 0 5.26-.63 6.868-1.887 1.72-1.257 2.784-2.687 3.187-4.287 1.09 2.286 2.686 3.886 4.791 4.8 2.22.915 4.414 1.374 6.586 1.374h12.004c1.943 0 3.593-.687 4.951-2.059 1.358-1.371 1.978-3.03 1.863-4.972h-8.4c-2.744 0-5.088-.971-7.031-2.914-1.83-1.944-2.749-4.23-2.756-6.86l-.352-68.928h-45.093zM382.41 73.68h14.746l.512 62.068c.007 2.63-.962 4.916-2.904 6.86-1.849 1.828-4.088 2.742-6.717 2.742h-5.143c-2.629 0-4.906-.914-6.83-2.743-1.943-1.943-2.86-4.23-2.754-6.859l-.5-52.295c.107-2.629 1.076-4.916 2.905-6.86 1.828-1.942 4.056-2.913 6.685-2.913zm284.797 0h14.746l.512 62.068c.007 2.63-.96 4.916-2.903 6.86-1.848 1.828-4.087 2.742-6.716 2.742H667.7c-2.629 0-4.904-.914-6.828-2.743-1.944-1.943-2.863-4.23-2.756-6.859l-.498-52.295c.107-2.629 1.074-4.916 2.902-6.86 1.829-1.942 4.057-2.913 6.686-2.913zm209.7 0h14.573c2.63 0 4.914.97 6.858 2.914 1.923 1.829 2.889 4.058 2.896 6.687l.53 52.467c-.107 2.63-1.074 4.916-2.903 6.86-1.848 1.828-4.087 2.742-6.716 2.742h-14.918l-.32-71.67zm172.831 0h14.746l.512 62.068c.007 2.63-.962 4.916-2.904 6.86-1.849 1.828-4.086 2.742-6.715 2.742h-5.145c-2.629 0-4.904-.914-6.828-2.743-1.944-1.943-2.862-4.23-2.756-6.859l-.498-52.295c.107-2.629 1.074-4.916 2.903-6.86 1.828-1.942 4.056-2.913 6.685-2.913z" 
                            transform="matrix(.265 0 0 .265 -217.493 85.713)" fill="currentColor"/>
                        <path d="M317.166 183.635v26.392c0 1.46.407 2.597 1.22 3.41.843.814 1.978 1.221 3.409 1.221.645 0 1.39-.085 2.232-.254.842-.168 1.57-.378 2.188-.63l-.588-2.989c-.365.14-.759.267-1.18.38-.42.083-.785.124-1.093.124-.786 0-1.403-.223-1.852-.672-.421-.477-.633-1.123-.633-1.937v-25.045h-3.703zm11.953 0v4.63h3.705v-4.63h-3.705zm263.756 0v26.392c0 1.46.407 2.597 1.22 3.41.843.814 1.98 1.221 3.41 1.221.646 0 1.39-.085 2.231-.254.842-.168 1.572-.378 2.19-.63l-.59-2.989c-.365.14-.757.267-1.178.38-.42.083-.785.124-1.094.124-.785 0-1.404-.223-1.853-.672-.421-.477-.63-1.123-.63-1.937v-25.045h-3.706zm114.031 0v4.63h3.703v-4.63h-3.703zm122.912 0v26.392c0 1.46.407 2.597 1.221 3.41.842.814 1.98 1.221 3.41 1.221.646 0 1.389-.085 2.23-.254.843-.168 1.573-.378 2.19-.63l-.59-2.989c-.365.14-.758.267-1.18.38-.42.083-.784.124-1.093.124-.786 0-1.403-.223-1.852-.672-.42-.477-.633-1.123-.633-1.937v-25.045h-3.703zm37.252 0v30.728h3.705v-6.777l4.21-3.957 7.576 10.734h4l-9.178-12.84 8.756-9.091h-4.082l-11.282 11.408v-20.205h-3.705zm-315.11.63c-1.542 0-2.973.198-4.292.59-1.319.365-2.456.926-3.41 1.684a7.954 7.954 0 0 0-2.23 2.78c-.534 1.094-.8 2.355-.8 3.786 0 1.18.196 2.19.588 3.032a5.798 5.798 0 0 0 1.727 2.146c.786.59 1.754 1.095 2.904 1.516 1.15.42 2.483.813 3.998 1.178 1.375.336 2.596.675 3.662 1.011 1.095.309 2.007.673 2.737 1.094.73.421 1.278.926 1.642 1.516.393.56.588 1.261.588 2.103 0 1.516-.589 2.653-1.767 3.41-1.179.758-2.834 1.137-4.967 1.137-1.15 0-2.258-.111-3.324-.336a22.623 22.623 0 0 1-2.948-.926 16.652 16.652 0 0 1-2.441-1.306c-.702-.477-1.278-.953-1.727-1.43l-1.808 3.2a18.707 18.707 0 0 0 5.597 3.155c2.077.702 4.266 1.053 6.567 1.053 1.543 0 2.974-.154 4.293-.463 1.319-.336 2.456-.842 3.41-1.515a7.633 7.633 0 0 0 2.314-2.61c.562-1.066.842-2.315.842-3.746 0-1.347-.238-2.484-.715-3.41-.449-.926-1.121-1.712-2.02-2.357-.87-.646-1.936-1.179-3.198-1.6-1.235-.449-2.625-.841-4.168-1.178a69.083 69.083 0 0 1-3.494-.884c-.983-.281-1.81-.604-2.483-.97-.645-.392-1.123-.855-1.432-1.388-.308-.533-.462-1.206-.462-2.02 0-1.515.533-2.708 1.6-3.578 1.094-.87 2.805-1.304 5.134-1.304.898 0 1.755.096 2.568.293.842.168 1.613.408 2.315.717.701.28 1.333.601 1.894.966.562.365 1.011.744 1.348 1.137l1.768-3.072c-1.263-1.039-2.709-1.865-4.336-2.483-1.628-.617-3.453-.927-5.473-.927zm-265.858.212-15.407 16.543v-16.5h-3.789v29.843h3.79v-9.134l5.177-5.39 10.86 14.524h4.124l-12.67-16.71 11.997-13.176h-4.082zm484.322 0v29.886h3.789v-23.11l9.976 17.722h2.147l9.934-17.721v23.11h3.789v-29.887h-3.957l-10.86 19.404-10.818-19.404h-4zm198.47 0v29.886h3.788V203.63h8.923c1.32 0 2.512-.266 3.579-.799a8.41 8.41 0 0 0 2.779-2.148 9.656 9.656 0 0 0 1.808-3.073c.421-1.15.633-2.343.633-3.578a9.214 9.214 0 0 0-.674-3.45 9.884 9.884 0 0 0-1.894-3.073 8.479 8.479 0 0 0-2.863-2.19c-1.095-.56-2.3-.841-3.62-.841h-12.458zm-542.203.59v7.324h-2.988v2.904h2.988v14.773c0 1.572.493 2.737 1.475 3.494.982.73 2.145 1.096 3.492 1.096.59 0 1.15-.058 1.684-.17a10.143 10.143 0 0 0 1.515-.336c.477-.168.9-.322 1.264-.463.365-.168.658-.31.883-.421l-.883-2.946c-.224.14-.646.336-1.264.588-.589.225-1.248.338-1.978.338-.646 0-1.207-.182-1.684-.547-.477-.365-.742-.956-.799-1.77v-13.636h4.924v-2.904h-4.924v-7.325h-3.705zm545.99 2.777h8.462c.73 0 1.417.154 2.062.463a4.94 4.94 0 0 1 1.727 1.304c.505.562.897 1.221 1.177 1.979.31.757.463 1.571.463 2.441 0 .842-.126 1.643-.379 2.4a6.902 6.902 0 0 1-1.05 2.02 5.102 5.102 0 0 1-1.643 1.348c-.617.309-1.318.463-2.104.463h-8.714v-12.418zm-461.29 3.47a4.03 4.03 0 0 0-2.86 1.188l-4.703 4.703a4.037 4.037 0 0 0 0 5.72l4.703 4.704a4.034 4.034 0 0 0 5.719 0l4.703-4.703a4.037 4.037 0 0 0 0-5.72l-4.703-4.704a4.03 4.03 0 0 0-2.86-1.188zm229.236 0a4.03 4.03 0 0 0-2.86 1.188l-4.703 4.703a4.037 4.037 0 0 0 0 5.72l4.704 4.704a4.037 4.037 0 0 0 5.72 0l4.703-4.703a4.037 4.037 0 0 0 0-5.72l-4.703-4.704a4.034 4.034 0 0 0-2.861-1.188zm196.803 0a4.03 4.03 0 0 0-2.86 1.188l-4.703 4.703a4.037 4.037 0 0 0 0 5.72l4.703 4.704a4.035 4.035 0 0 0 5.72 0l4.702-4.703a4.037 4.037 0 0 0 0-5.72l-4.703-4.704a4.03 4.03 0 0 0-2.86-1.188zm-635.46.698c-2.862 0-5.71.953-8.544 2.861l1.22 2.4c2.442-1.711 4.77-2.568 6.987-2.568 1.852 0 3.283.52 4.293 1.559 1.01 1.01 1.515 2.413 1.515 4.209v1.767c-.841-.337-1.81-.604-2.904-.8a18.296 18.296 0 0 0-3.24-.294c-1.347 0-2.596.168-3.746.504-1.123.337-2.106.8-2.947 1.39a6.282 6.282 0 0 0-1.895 2.146c-.449.813-.674 1.726-.674 2.736 0 .982.184 1.894.549 2.736a7.39 7.39 0 0 0 1.557 2.147 7.796 7.796 0 0 0 2.357 1.474 8.204 8.204 0 0 0 2.904.504c1.712 0 3.312-.336 4.8-1.01a9.646 9.646 0 0 0 3.745-3.03l.084 1.558c.084.617.337 1.15.758 1.6.45.42 1.038.63 1.768.63.28 0 .548-.015.8-.043.253-.028.574-.069.967-.125v-3.199c-.785-.028-1.178-.478-1.178-1.348v-8.964c0-2.807-.813-4.982-2.44-6.526-1.6-1.543-3.845-2.314-6.735-2.314zm48.534 0c-1.796 0-3.41.447-4.842 1.345-1.431.87-2.596 2.12-3.494 3.748v-4.714h-3.367v21.972h3.705v-13.26c.505-1.74 1.362-3.13 2.568-4.167 1.207-1.067 2.554-1.6 4.041-1.6 1.46 0 2.554.533 3.283 1.6.73 1.066 1.094 2.779 1.094 5.136v12.291h3.703v-13.217c.505-1.711 1.35-3.101 2.528-4.167 1.206-1.095 2.566-1.643 4.082-1.643 1.459 0 2.553.548 3.283 1.643.758 1.094 1.137 2.792 1.137 5.093v12.291h3.705V201.23c0-1.318-.114-2.54-.338-3.662-.225-1.122-.589-2.09-1.094-2.904a5.08 5.08 0 0 0-2.062-1.937c-.842-.477-1.896-.715-3.159-.715-3.62 0-6.41 1.782-8.375 5.345-.252-1.571-.927-2.847-2.021-3.83-1.067-1.01-2.525-1.515-4.377-1.515zm35.4 0c-2.862 0-5.71.953-8.545 2.861l1.221 2.4c2.441-1.711 4.77-2.568 6.986-2.568 1.853 0 3.285.52 4.295 1.559 1.01 1.01 1.514 2.413 1.514 4.209v1.767c-.842-.337-1.81-.604-2.904-.8a18.296 18.296 0 0 0-3.24-.294c-1.347 0-2.596.168-3.747.504-1.122.337-2.105.8-2.947 1.39a6.282 6.282 0 0 0-1.894 2.146c-.45.813-.674 1.726-.674 2.736 0 .982.184 1.894.549 2.736.392.814.91 1.53 1.556 2.147a7.796 7.796 0 0 0 2.358 1.474 8.204 8.204 0 0 0 2.904.504c1.712 0 3.311-.336 4.799-1.01a9.647 9.647 0 0 0 3.746-3.03l.084 1.558c.084.617.337 1.15.758 1.6.449.42 1.038.63 1.767.63.28 0 .548-.015.801-.043.253-.028.574-.069.967-.125v-3.199c-.786-.028-1.178-.478-1.178-1.348v-8.964c0-2.807-.814-4.982-2.441-6.526-1.6-1.543-3.844-2.314-6.735-2.314zm27.614 0c-1.937 0-3.733.462-5.39 1.388-1.627.926-2.875 2.162-3.745 3.705v-4.714h-3.367v21.972h3.703v-13.26a7.735 7.735 0 0 1 1.136-2.314 8.483 8.483 0 0 1 3.916-2.99 5.976 5.976 0 0 1 2.272-.463c1.46 0 2.54.533 3.242 1.6.73 1.066 1.094 2.779 1.094 5.136v12.291h3.705V201.23c0-1.318-.113-2.54-.338-3.662-.196-1.122-.548-2.09-1.053-2.904a5.15 5.15 0 0 0-2.02-1.937c-.841-.477-1.893-.715-3.155-.715zm35.146 0c-2.862 0-5.71.953-8.545 2.861l1.22 2.4c2.442-1.711 4.772-2.568 6.99-2.568 1.851 0 3.282.52 4.292 1.559 1.01 1.01 1.516 2.413 1.516 4.209v1.767c-.842-.337-1.81-.604-2.905-.8a18.318 18.318 0 0 0-3.242-.294c-1.347 0-2.595.168-3.746.504-1.122.337-2.103.8-2.945 1.39a6.282 6.282 0 0 0-1.895 2.146c-.449.813-.674 1.726-.674 2.736 0 .982.183 1.894.547 2.736.393.814.914 1.53 1.559 2.147a7.796 7.796 0 0 0 2.357 1.474 8.204 8.204 0 0 0 2.905.504c1.711 0 3.31-.336 4.797-1.01a9.652 9.652 0 0 0 3.748-3.03l.084 1.558c.084.617.336 1.15.757 1.6.45.42 1.038.63 1.768.63.28 0 .546-.015.799-.043.252-.028.576-.069.969-.125v-3.199c-.786-.028-1.178-.478-1.178-1.348v-8.964c0-2.807-.814-4.982-2.442-6.526-1.6-1.543-3.846-2.314-6.736-2.314zm27.613 0c-1.936 0-3.73.462-5.386 1.388-1.628.926-2.877 2.162-3.746 3.705v-4.714h-3.37v21.972h3.705v-13.26a7.735 7.735 0 0 1 1.137-2.314 8.472 8.472 0 0 1 3.914-2.99 5.986 5.986 0 0 1 2.274-.463c1.459 0 2.538.533 3.24 1.6.73 1.066 1.096 2.779 1.096 5.136v12.291h3.703V201.23c0-1.318-.112-2.54-.336-3.662-.197-1.122-.548-2.09-1.053-2.904a5.15 5.15 0 0 0-2.02-1.937c-.841-.477-1.895-.715-3.158-.715zm136.762 0c-2.862 0-5.71.953-8.545 2.861l1.22 2.4c2.442-1.711 4.77-2.568 6.987-2.568 1.852 0 3.285.52 4.295 1.559 1.01 1.01 1.514 2.413 1.514 4.209v1.767c-.842-.337-1.81-.604-2.905-.8a18.296 18.296 0 0 0-3.24-.294c-1.347 0-2.595.168-3.746.504-1.122.337-2.105.8-2.947 1.39a6.282 6.282 0 0 0-1.895 2.146c-.449.813-.673 1.726-.673 2.736 0 .982.184 1.894.548 2.736.393.814.912 1.53 1.557 2.147a7.796 7.796 0 0 0 2.357 1.474 8.204 8.204 0 0 0 2.905.504c1.711 0 3.311-.336 4.799-1.01a9.647 9.647 0 0 0 3.746-3.03l.084 1.558c.084.617.336 1.15.757 1.6.45.42 1.038.63 1.768.63.28 0 .548-.015.8-.043.253-.028.575-.069.968-.125v-3.199c-.786-.028-1.178-.478-1.178-1.348v-8.964c0-2.807-.814-4.982-2.442-6.526-1.6-1.543-3.844-2.314-6.734-2.314zm57.961 0c-1.656 0-3.17.308-4.545.925a10.957 10.957 0 0 0-3.578 2.442 11.576 11.576 0 0 0-2.314 3.62 12.009 12.009 0 0 0-.801 4.378c0 1.543.267 3.017.8 4.42a11.576 11.576 0 0 0 2.315 3.619 11.017 11.017 0 0 0 3.535 2.484c1.375.59 2.891.883 4.547.883 1.094 0 2.146-.14 3.156-.42 1.01-.28 1.923-.66 2.737-1.136a9.752 9.752 0 0 0 2.189-1.768 7.852 7.852 0 0 0 1.516-2.23l-3.2-.885a4.485 4.485 0 0 1-1.01 1.515c-.42.45-.913.828-1.474 1.137a9.475 9.475 0 0 1-1.81.758 7.793 7.793 0 0 1-1.977.252 7.005 7.005 0 0 1-2.736-.547 7.675 7.675 0 0 1-2.274-1.516 7.69 7.69 0 0 1-1.642-2.314c-.421-.898-.674-1.896-.758-2.99h18.226c.028-.14.043-.336.043-.588a7.7 7.7 0 0 0 .041-.842c0-1.46-.265-2.864-.798-4.21-.506-1.376-1.236-2.569-2.19-3.58-.954-1.037-2.12-1.864-3.494-2.482-1.347-.617-2.848-.925-4.504-.925zm22.646 0c-1.178 0-2.285.154-3.324.463-1.01.28-1.894.715-2.652 1.304a6.124 6.124 0 0 0-1.81 2.147c-.422.842-.631 1.81-.631 2.904 0 .87.139 1.6.42 2.19.28.589.73 1.094 1.347 1.515.617.421 1.403.785 2.358 1.094.954.309 2.09.632 3.41.969 1.038.252 1.948.49 2.734.714.786.225 1.432.478 1.938.758.505.28.884.617 1.136 1.01.253.365.38.815.38 1.348 0 1.15-.478 2.048-1.432 2.693-.927.617-2.19.926-3.79.926-1.43 0-2.79-.238-4.082-.715-1.29-.505-2.582-1.248-3.873-2.23l-1.6 2.482c1.236 1.038 2.709 1.84 4.42 2.4a17.45 17.45 0 0 0 5.22.8c2.665 0 4.785-.603 6.357-1.81 1.571-1.206 2.357-2.834 2.357-4.882 0-.926-.184-1.712-.549-2.358-.336-.645-.87-1.206-1.6-1.683-.7-.477-1.598-.884-2.692-1.22-1.067-.366-2.33-.717-3.79-1.054a54.647 54.647 0 0 1-2.398-.63c-.645-.197-1.179-.422-1.6-.674-.42-.253-.729-.548-.925-.885-.169-.337-.252-.757-.252-1.262 0-1.263.462-2.175 1.388-2.736.954-.59 2.105-.885 3.452-.885 1.206 0 2.384.21 3.535.63 1.15.394 2.189.998 3.115 1.811l1.683-2.23c-.982-.87-2.187-1.572-3.619-2.105-1.43-.534-2.975-.8-4.63-.8zm120.977 0c-2.862 0-5.71.953-8.545 2.861l1.22 2.4c2.442-1.711 4.77-2.568 6.987-2.568 1.852 0 3.285.52 4.295 1.559 1.01 1.01 1.514 2.413 1.514 4.209v1.767c-.842-.337-1.81-.604-2.905-.8a18.296 18.296 0 0 0-3.24-.294c-1.347 0-2.595.168-3.746.504-1.122.337-2.105.8-2.947 1.39a6.282 6.282 0 0 0-1.895 2.146c-.449.813-.672 1.726-.672 2.736 0 .982.183 1.894.547 2.736.393.814.912 1.53 1.557 2.147a7.796 7.796 0 0 0 2.357 1.474 8.204 8.204 0 0 0 2.905.504c1.711 0 3.311-.336 4.799-1.01a9.647 9.647 0 0 0 3.746-3.03l.084 1.558c.084.617.336 1.15.757 1.6.45.42 1.038.63 1.768.63.28 0 .548-.015.8-.043.253-.028.575-.069.968-.125v-3.199c-.786-.028-1.178-.478-1.178-1.348v-8.964c0-2.807-.814-4.982-2.442-6.526-1.6-1.543-3.844-2.314-6.734-2.314zm187.861 0c-2.862 0-5.71.953-8.545 2.861l1.221 2.4c2.442-1.711 4.77-2.568 6.986-2.568 1.853 0 3.285.52 4.295 1.559 1.01 1.01 1.516 2.413 1.516 4.209v1.767c-.842-.337-1.81-.604-2.904-.8a18.318 18.318 0 0 0-3.242-.294c-1.347 0-2.596.168-3.747.504-1.122.337-2.105.8-2.947 1.39a6.276 6.276 0 0 0-1.892 2.146c-.45.813-.674 1.726-.674 2.736 0 .982.182 1.894.547 2.736.393.814.91 1.53 1.556 2.147a7.796 7.796 0 0 0 2.358 1.474 8.204 8.204 0 0 0 2.904.504c1.712 0 3.311-.336 4.799-1.01a9.646 9.646 0 0 0 3.746-3.03l.084 1.558c.084.617.337 1.15.758 1.6.449.42 1.038.63 1.767.63.28 0 .548-.015.801-.043.253-.028.576-.069.969-.125v-3.199c-.786-.028-1.18-.478-1.18-1.348v-8.964c0-2.807-.814-4.982-2.441-6.526-1.6-1.543-3.844-2.314-6.735-2.314zm26.393 0c-1.684 0-3.228.42-4.63 1.261a10.054 10.054 0 0 0-3.368 3.243v-4.125h-3.283v30.937h3.705v-13.3a10.297 10.297 0 0 0 3.283 3.41c1.403.897 3.016 1.345 4.84 1.345 1.46 0 2.791-.293 3.998-.883a10.197 10.197 0 0 0 3.115-2.441c.87-1.038 1.544-2.246 2.022-3.621.477-1.403.714-2.89.714-4.461 0-1.487-.265-2.92-.798-4.295a11.159 11.159 0 0 0-2.149-3.62 10.296 10.296 0 0 0-3.283-2.524c-1.263-.618-2.65-.926-4.166-.926zm48.45 0c-2.863 0-5.711.953-8.546 2.861l1.221 2.4c2.441-1.711 4.77-2.568 6.986-2.568 1.852 0 3.285.52 4.295 1.559 1.01 1.01 1.516 2.413 1.516 4.209v1.767c-.842-.337-1.812-.604-2.906-.8a18.296 18.296 0 0 0-3.24-.294c-1.348 0-2.596.168-3.747.504-1.122.337-2.105.8-2.947 1.39a6.28 6.28 0 0 0-1.895 2.146c-.448.813-.671 1.726-.671 2.736 0 .982.182 1.894.546 2.736.393.814.912 1.53 1.557 2.147a7.796 7.796 0 0 0 2.357 1.474 8.204 8.204 0 0 0 2.905.504c1.712 0 3.311-.336 4.799-1.01a9.646 9.646 0 0 0 3.746-3.03l.084 1.558c.084.617.337 1.15.758 1.6.448.42 1.037.63 1.767.63.28 0 .548-.015.8-.043.254-.028.577-.069.97-.125v-3.199c-.786-.028-1.18-.478-1.18-1.348v-8.964c0-2.807-.814-4.982-2.441-6.526-1.6-1.543-3.844-2.314-6.735-2.314zm-748.208.379v21.972h3.705v-21.972h-3.705zm238.164 0v13.173c0 3.06.59 5.361 1.768 6.905 1.178 1.543 2.92 2.314 5.22 2.314 1.908 0 3.661-.435 5.26-1.304 1.6-.898 2.891-2.175 3.873-3.83l.084 2.568c.028.645.281 1.191.758 1.64.505.421 1.124.631 1.854.631.224 0 .447-.013.671-.04.253 0 .591-.029 1.012-.085v-3.199c-.786-.028-1.18-.478-1.18-1.348v-17.425H582.9v13.763c-.645 1.684-1.643 3.018-2.99 4-1.319.954-2.734 1.43-4.25 1.43-3.115 0-4.672-2.244-4.672-6.734v-12.46h-3.705zm57.625 0 9.346 21.972h3.072l4.377-10.734 4.42 10.734h3.074l9.344-21.972h-3.578l-7.535 18.31-3.703-9.135 3.746-9.134h-3.073l-2.695 7.029-2.693-7.03h-3.072l3.787 9.135-3.704 9.135-7.576-18.31h-3.537zm81.998 0v21.972h3.703v-21.972h-3.703zm134.657 0v13.173c0 3.06.588 5.361 1.767 6.905 1.179 1.543 2.918 2.314 5.219 2.314 1.908 0 3.662-.435 5.262-1.304 1.6-.898 2.89-2.175 3.873-3.83l.084 2.568c.028.645.28 1.191.757 1.64.506.421 1.122.631 1.852.631.225 0 .45-.013.674-.04.252 0 .589-.029 1.01-.085v-3.199c-.786-.028-1.178-.478-1.178-1.348v-17.425h-3.703v13.763c-.646 1.684-1.644 3.018-2.99 4-1.32.954-2.735 1.43-4.25 1.43-3.115 0-4.674-2.244-4.674-6.734v-12.46h-3.703zm47.986 0v13.173c0 3.06.589 5.361 1.767 6.905 1.179 1.543 2.918 2.314 5.22 2.314 1.907 0 3.661-.435 5.26-1.304 1.6-.898 2.892-2.175 3.874-3.83l.084 2.568c.028.645.28 1.191.758 1.64.505.421 1.122.631 1.851.631.225 0 .45-.013.674-.04.253 0 .589-.029 1.01-.085v-3.199c-.786-.028-1.178-.478-1.178-1.348v-17.425h-3.705v13.763c-.645 1.684-1.641 3.018-2.988 4-1.32.954-2.735 1.43-4.25 1.43-3.115 0-4.674-2.244-4.674-6.734v-12.46h-3.703zm154.06 0v13.173c0 3.06.59 5.361 1.768 6.905 1.179 1.543 2.918 2.314 5.219 2.314 1.908 0 3.662-.435 5.261-1.304 1.6-.898 2.891-2.175 3.873-3.83l.084 2.568c.028.645.281 1.191.758 1.64.505.421 1.124.631 1.854.631.224 0 .447-.013.672-.04.252 0 .59-.029 1.011-.085v-3.199c-.785-.028-1.18-.478-1.18-1.348v-17.425h-3.702v13.763c-.646 1.684-1.644 3.018-2.99 4-1.32.954-2.735 1.43-4.25 1.43-3.116 0-4.675-2.244-4.675-6.734v-12.46h-3.703zM671 194.789c.982 0 1.91.182 2.78.547.87.337 1.627.814 2.273 1.432.673.617 1.22 1.375 1.64 2.273.45.87.717 1.823.801 2.861h-14.902a8.581 8.581 0 0 1 .717-2.861c.42-.87.954-1.613 1.6-2.23a6.93 6.93 0 0 1 2.314-1.475 7.106 7.106 0 0 1 2.777-.547zm356.951.422c1.066 0 2.047.225 2.946.674a7.117 7.117 0 0 1 2.4 1.767c.673.73 1.207 1.6 1.6 2.61.392.982.587 2.02.587 3.115a9.273 9.273 0 0 1-.504 3.03 8.47 8.47 0 0 1-1.472 2.652 7.338 7.338 0 0 1-2.274 1.853c-.87.45-1.852.672-2.947.672a6.417 6.417 0 0 1-2.19-.379 9.094 9.094 0 0 1-1.978-1.094 9.085 9.085 0 0 1-1.64-1.64 10.057 10.057 0 0 1-1.178-2.065v-6.271c.14-.674.434-1.305.883-1.895a7.183 7.183 0 0 1 1.642-1.556 8.673 8.673 0 0 1 2.02-1.053c.73-.28 1.432-.42 2.105-.42zm-726.107 8.166c1.936 0 3.801.351 5.597 1.053v3.24c0 .561-.265 1.11-.798 1.643-.59.813-1.46 1.47-2.61 1.976-1.122.477-2.343.717-3.662.717h-.002a5.262 5.262 0 0 1-1.892-.338 5.1 5.1 0 0 1-1.559-.926 4.534 4.534 0 0 1-1.01-1.388 4.4 4.4 0 0 1-.336-1.725c0-1.263.574-2.289 1.725-3.074 1.178-.786 2.695-1.178 4.547-1.178zm83.933 0c1.937 0 3.802.351 5.598 1.053v3.24c0 .561-.266 1.11-.799 1.643-.59.813-1.459 1.47-2.61 1.976-1.122.477-2.342.717-3.661.717a5.273 5.273 0 0 1-1.895-.338 5.1 5.1 0 0 1-1.558-.926 4.534 4.534 0 0 1-1.01-1.388 4.395 4.395 0 0 1-.336-1.725c0-1.263.574-2.289 1.724-3.074 1.179-.786 2.695-1.178 4.547-1.178zm62.762 0c1.936 0 3.802.351 5.598 1.053v3.24c0 .561-.266 1.11-.8 1.643-.588.813-1.46 1.47-2.61 1.976-1.123.477-2.344.717-3.663.717a5.262 5.262 0 0 1-1.892-.338 5.1 5.1 0 0 1-1.559-.926 4.534 4.534 0 0 1-1.01-1.388 4.396 4.396 0 0 1-.337-1.725c0-1.263.576-2.289 1.726-3.074 1.179-.786 2.695-1.178 4.547-1.178zm164.373 0c1.936 0 3.802.351 5.598 1.053v3.24c0 .561-.266 1.11-.8 1.643-.588.813-1.458 1.47-2.608 1.976-1.123.477-2.344.717-3.663.717a5.273 5.273 0 0 1-1.894-.338 5.09 5.09 0 0 1-1.557-.926 4.54 4.54 0 0 1-1.011-1.388 4.393 4.393 0 0 1-.336-1.725c0-1.263.574-2.289 1.724-3.074 1.179-.786 2.695-1.178 4.547-1.178zm201.584 0c1.936 0 3.802.351 5.598 1.053v3.24c0 .561-.266 1.11-.8 1.643-.588.813-1.458 1.47-2.608 1.976-1.123.477-2.344.717-3.663.717a5.273 5.273 0 0 1-1.894-.338 5.1 5.1 0 0 1-1.559-.926 4.534 4.534 0 0 1-1.01-1.388 4.397 4.397 0 0 1-.335-1.725c0-1.263.576-2.289 1.726-3.074 1.179-.786 2.693-1.178 4.545-1.178zm187.861 0c1.937 0 3.804.351 5.6 1.053v3.24c0 .561-.268 1.11-.8 1.643-.59.813-1.46 1.47-2.61 1.976-1.123.477-2.343.717-3.662.717a5.273 5.273 0 0 1-1.895-.338 5.09 5.09 0 0 1-1.556-.926 4.54 4.54 0 0 1-1.012-1.388 4.397 4.397 0 0 1-.336-1.725c0-1.263.576-2.289 1.726-3.074 1.18-.786 2.693-1.178 4.545-1.178zm74.842 0c1.937 0 3.804.351 5.6 1.053v3.24c0 .561-.268 1.11-.801 1.643-.59.813-1.459 1.47-2.61 1.976-1.122.477-2.342.717-3.661.717a5.273 5.273 0 0 1-1.895-.338 5.09 5.09 0 0 1-1.557-.926 4.54 4.54 0 0 1-1.011-1.388 4.397 4.397 0 0 1-.336-1.725c0-1.263.576-2.289 1.726-3.074 1.179-.786 2.693-1.178 4.545-1.178z" 
                            transform="matrix(.265 0 0 .265 -217.493 85.713)" fill="currentColor"/>
                    </g>
                </svg>
                <style jsx>{`
                    span {
                    padding: 0.5rem 0.5rem 0.5rem 0;
                    mask-image: linear-gradient(
                        60deg,
                        black 25%,
                        rgba(0, 0, 0, 0.2) 50%,
                        black 75%
                        );
                    mask-size: 400%;
                    mask-position: 0%;
                    }
                    span:hover {
                        mask-position: 100%;
                        transition: mask-position 1s ease, -webkit-mask-position 1s ease;
                    }
                `}</style>
            </span>
          </FadeIn>
        </main>
      </>
    );
  }
  
  export default LandingPage;
  