import { Swiper, Parallax, Mousewheel } from 'swiper'
Swiper.use([Parallax, Mousewheel])

import { gsap } from 'gsap'

// Import October CMS System Framework (requires jQuery)
import '~/modules/system/assets/js/framework.js'
import '~/modules/system/assets/js/framework.extras.js'

// Import October CMS Plugins Examples
// import '~/themes/mytheme/assets/vendor/lazyload/lazyload.js'
// import '~/plugins/nms/plugin/assets/js/plugin.js'

document.addEventListener('DOMContentLoaded', () => {

		//Swiper Slider
		const swiper = new Swiper('.swiper', {
      loop: false,
			speed: 1500,
			// mousewheel: {
			// 	invert: false,
			// 	releaseOnEdges: true,
			// },
		});

		// swiper.on('slideChange', function (e) {
		// 	if (e.isEnd) {
		// 		e.mousewheel.disable();
		// 	}
		// });	
	
		const swiper2 = new Swiper('.second-swiper', {
			loop: false,
			mousewheel: {
				releaseOnEdges: true,
			},
		});
	
		document.getElementById('convinc-btn').addEventListener("click", function () {
			var more = document.getElementById('readMore');
			if (more.style.display === "none") {
				more.style.display = "block";
			} else {
				more.style.display = "none";
				enBlock.style.display = "none";
				deBlock.style.display = "none";
			}
		})
		//Benefits Buttons
	
		const btnEn = document.getElementById('english');
		const btnDe = document.getElementById('german');
		const enBlock = document.getElementById('en');
		const deBlock = document.getElementById('de');
	
		btnEn.onclick = function () {
			enBlock.style.display = "block";
			deBlock.style.display = "none";
		}
	
		btnDe.onclick = function () {
			deBlock.style.display = "block";
			enBlock.style.display = "none";
		}
	
		//Real Talk...block. Case example expand
		document.getElementById('click-block').addEventListener("click", function () {
			var container = $(this).parents('.container-xxl');
			container.find('.real-talk__toggle-content').slideToggle();
			container.find('.real-talk__arrow').toggleClass('active');
		})
	
		// multi step form
		const multiStepForm = document.querySelector("[data-multi-step]")
		const formSteps = [...multiStepForm.querySelectorAll("[data-step]")]
		const nextBtns = document.getElementById("next")
		const progressSteps = document.querySelectorAll(".step-link")
	
		let active = 1;
	
		let currentStep = formSteps.findIndex(step => {
			return step.classList.contains("active")
		})
		if (currentStep < 0) {
			currentStep = 0
			showCurrentStep();
			showCurrentProgress();
		}
	
		multiStepForm.addEventListener("click", e => {
			let incrementor
			if (e.target.matches("[data-next]")) {
				incrementor = 1
			} else if (e.target.matches("[data-previous]")) {
				incrementor = -1
			}
	
			if (incrementor == null) return
	
			const inputs = [...formSteps[currentStep].querySelectorAll("input")]
			const allValid = inputs.every(input => input.reportValidity())
			if (allValid) {
				currentStep += incrementor
				showCurrentStep();
				showCurrentProgress();
			}
		})
	
		function showCurrentStep() {
			formSteps.forEach((step, index) => {
				step.classList.toggle("active", index === currentStep)
			})
		}
		//progress steps
		function showCurrentProgress() {
			progressSteps.forEach((progressStep, index) => {
				if (index == currentStep) {
					progressStep.classList.add("step-link__active");
				} else {
					progressStep.classList.remove("step-link__active");
				}
			})
		}
	
		// Add  Course Field
		var form = document.getElementById('options-block');
		var addField = document.getElementById('add-more-field');
	
		addField.onclick = function () {
			var newField = document.createElement('input');
			newField.setAttribute('type', 'text');
			newField.setAttribute('name', 'course-title[]');
			newField.setAttribute('id', 'course-title');
			newField.setAttribute('placeholder', 'Course Title');
			form.appendChild(newField);
		}

		//Animation Block
		gsap.registerPlugin(ScrollTrigger, Power2);
	
		//Animation Lines
		gsap.to(".revel",{
			scrollTrigger: {
				trigger: ".revel",
				toggleClass: 'active',
				start: "top 60.5%",
				end: "top 20%",
				toggleActions: "play none reverse none",
			}
		})
	
		gsap.to(".revel2", {
			scrollTrigger: {
				trigger: ".revel2",
				toggleClass: 'active',
				start: "top 45%",
				// end: "top 0%",
			}
		})
	
		//Animation Images
		gsap.to(".triggerToRightDown", {
			x: 20,
			y: 20,
			ease: Power2.easeIn,
			scrollTrigger: {
				trigger: ".triggerToRightDown",
				start: "top 20%",
				end: "top 40%",
				toggleActions: "play none reverse none",
			}
		})
		gsap.to(".trigerToLeftUp ", {
			x: -20,
			y: -20,
			ease: Power2.easeIn,
			scrollTrigger: {
				trigger: ".trigerToLeftUp",
				start: "top 50%",
				end: "top 70%",
				toggleActions: "play none reverse none",
			}
		})
	
		gsap.to(".trigerToLeftUp2", {
			x: -20,
			y: -20,
			ease: Power2.easeIn,
			scrollTrigger: {
				trigger: ".trigerToLeftUp2",
				start: "top 30%",
				end: "top 40%",
				toggleActions: "play none reverse none",
			}
		})
	
		gsap.to(".abroad-overflow_under ", {
			y: 20,
			x: -20,
			ease: Power2.easeIn,
			scrollTrigger: {
				trigger: ".abroad-overflow_under",
				start: "top 10%",
				end: "top 60%",
				toggleActions: "play none reverse none",
			}
		})
	
		gsap.to(".abroad-overflow ", {
			x: 20,
			y: -20,
			ease: Power2.easeIn,
			scrollTrigger: {
				trigger: ".abroad-overflow",
				start: "top 40%",
				end: "top 50%",
				toggleActions: "play none reverse none",
			}
		})
	
		gsap.to(".paving-overflow__under", {
			x: 20, y: 20,
			ease: Power2.easeIn,
			scrollTrigger: {
				trigger: ".paving-overflow__under",
				start: "top 20%",
				end: "top 50%",
				toggleActions: "play none reverse none",
			}
		})
		gsap.to(".paving-overflow__above ", {
			x: -20,
			y: -20,
			ease: Power2.easeIn,
			scrollTrigger: {
				trigger: ".paving-overflow__above",
				start: "top 40%",
				end: "top 50%",
				toggleActions: "play none reverse none",
			}
		})
	
		gsap.to(".sibling-overflow ", {
			y: -20, x: 20,
			ease: Power2.easeIn,
			scrollTrigger: {
				trigger: ".sibling-overflow",
				start: "top 40%",
				end: "top 60%",
				toggleActions: "play none reverse none",
			}
		})
	
		gsap.to(".sibling-overflow_under ", {
			y: 20,x: -20,
			ease: Power2.easeIn,
			scrollTrigger: {
				trigger: ".sibling-overflow_under",
				start: "top 20%",
				end: "top 50%",
				toggleActions: "play none reverse none",
			}
		})
	
		gsap.to(".beyond-overflow__under", {
			x: 20,
			y: 20,
			ease: Power2.easeIn,
			scrollTrigger: {
				trigger: ".beyond-overflow__under",
				start: "top 15%",
				end: "top 60%",
				toggleActions: "play none reverse none",
			}
		})
		gsap.to(".beyond-overflow__above ", {
			x: -20,
			y: -20,
			ease: Power2.easeIn,
			scrollTrigger: {
				trigger: ".beyond-overflow__above",
				start: "top 45%",
				end: "top 60%",
				toggleActions: "play none reverse none",
			}
		})
	
		gsap.to(".practice-overflow_under", {
			y: 20,
			x: -20,
			ease: Power2.easeIn,
			scrollTrigger: {
				trigger: ".practice-overflow_under",
				start: "top 20%",
				end: "top 60%",
				toggleActions: "play none reverse none",
			}
		})
	
		gsap.to(".practice-overflow ", {
			y: -20,
			x: 20,
			ease: Power2.easeIn,
			scrollTrigger: {
				trigger: ".practice-overflow",
				start: "top 50%",
				end: "top 60%",
				toggleActions: "play none reverse none",
			}
		})
	
		gsap.to(".prepped-overflow__under", {
			x: 20,
			y: 20,
			ease: Power2.easeIn,
			scrollTrigger: {
				trigger: ".prepped-overflow__under",
				start: "top 20%",
				end: "top 60%",
				toggleActions: "play none reverse none",
	
			}
		})
		gsap.to(".prepped-overflow__above ", {
			x: -20,
			y: -20,
			ease: Power2.easeIn,
			scrollTrigger: {
				trigger: ".prepped-overflow__above",
				start: "top 50%",
				end: "top 60%",
				toggleActions: "play none reverse none",
			}
		})
	
		gsap.to(".diverse-overflow", {
			y: -20,	x: 20,
			ease: Power2.easeIn,
			scrollTrigger: {
				trigger: ".diverse-overflow",
				start: "top 30%",
				end: "top 60%",
				toggleActions: "play none reverse none",
			}
		})	

		gsap.to(".real-talk-overflow__under", {
			x: 20,
			y: 20,
			ease: Power2.easeIn,
			scrollTrigger: {
				trigger: ".real-talk-overflow__under",
				start: "top 20%",
				end: "top 60%",
				toggleActions: "play none reverse none",
	
			}
		})
		gsap.to(".real-talk-overflow__above ", {
			x: -20,
			y: -20,
			ease: Power2.easeIn,
			scrollTrigger: {
				trigger: ".real-talk-overflow__above",
				start: "top 40%",
				end: "top 40%",
				toggleActions: "play none reverse none",
			}
		})	
		gsap.to(".sync-overflow_under", {
			y: 20, x: -20,
			ease: Power2.easeIn,
			scrollTrigger: {
				trigger: ".sync-overflow_under",
				start: "top 15%",
				end: "top 60%",
				toggleActions: "play none reverse none",
			}
		})	
		gsap.to(".sync-overflow ", {
			y: -20, x: 20,
			ease: Power2.easeIn,
			scrollTrigger: {
				trigger: ".sync-overflow",
				start: "top 40%",
				end: "top 60%",
				toggleActions: "play none reverse none",
			}
		})
	
		gsap.to(".multi-step__form-block__bus__overflow", {
			y: -20,
			x: 20,
			ease: Power2.easeIn,
			scrollTrigger: {
				trigger: ".multi-step__form-block__bus__overflow",
				start: "top 50%",
				end: "top 60%",
				toggleActions: "play none reverse none",
			}
		})
	
		gsap.to(".multi-step__form-block__everybody-img", {
			y: 20,x: -20,
			ease: Power2.easeIn,
			scrollTrigger: {
				trigger: ".multi-step__form-block__everybody-img",
				start: "top 40%",
				end: "top 50%",
				toggleActions: "play none reverse none",
			}
		})
	
		gsap.to(".got-questions__image-overflow", {
			y: 20,
			x: -20,
			ease: Power2.easeIn,
			scrollTrigger: {
				trigger: ".got-questions__image-overflow",
				start: "top 40%",
				end: "top 30%",
				toggleActions: "play none reverse none",
			}
		})

})
