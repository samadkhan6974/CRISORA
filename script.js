<script>
        // Navigation smooth scrolling
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Assessment functionality
        let currentQuestion = 0;
        const totalQuestions = 10;
        let assessmentStarted = false;

        const questions = [
            {
                question: "Do you have a 72-hour emergency kit prepared?",
                options: ["Yes, fully stocked", "Partially prepared", "No, not yet"]
            },
            {
                question: "Does your family have an emergency communication plan?",
                options: ["Yes, written and practiced", "Yes, but not practiced", "No plan yet"]
            },
            {
                question: "Do you know your evacuation routes?",
                options: ["Multiple routes planned", "One route known", "No routes identified"]
            },
            {
                question: "Are you trained in basic first aid?",
                options: ["Certified and current", "Some training", "No training"]
            },
            {
                question: "Do you have emergency water storage?",
                options: ["1+ gallon per person/day", "Some water stored", "No water storage"]
            }
        ];

        function startLearning() {
            document.querySelector('#learn').scrollIntoView({ behavior: 'smooth' });
        }

        function checkReadiness() {
            document.querySelector('#prepare').scrollIntoView({ behavior: 'smooth' });
        }

        function startAssessment() {
            assessmentStarted = true;
            currentQuestion = 0;
            showQuestion();
        }

        function showQuestion() {
            if (currentQuestion < questions.length) {
                const question = questions[currentQuestion];
                const content = `
                    <div class="mb-6">
                        <h4 class="text-xl font-semibold mb-4">Question ${currentQuestion + 1} of ${questions.length}</h4>
                        <p class="text-lg mb-6">${question.question}</p>
                        <div class="space-y-3">
                            ${question.options.map((option, index) => `
                                <button onclick="selectAnswer(${index})" class="w-full text-left p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
                                    ${option}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                `;
                document.getElementById('assessment-content').innerHTML = content;
                updateProgress();
            } else {
                showResults();
            }
        }

        function selectAnswer(answerIndex) {
            currentQuestion++;
            if (currentQuestion < questions.length) {
                showQuestion();
            } else {
                showResults();
            }
        }

        function updateProgress() {
            const progress = (currentQuestion / questions.length) * 100;
            document.getElementById('progress-bar').style.width = progress + '%';
            document.getElementById('progress-text').textContent = `${currentQuestion} of ${questions.length} questions`;
        }

        function showResults() {
            const score = Math.floor(Math.random() * 40) + 60; // Demo score
            const content = `
                <div class="text-center py-8">
                    <div class="text-6xl mb-4">📊</div>
                    <h3 class="text-2xl font-semibold mb-4">Your Preparedness Score</h3>
                    <div class="text-4xl font-bold text-blue-600 mb-6">${score}%</div>
                    <div class="max-w-md mx-auto mb-8">
                        <div class="bg-gray-200 rounded-full h-4">
                            <div class="bg-blue-600 h-4 rounded-full" style="width: ${score}%"></div>
                        </div>
                    </div>
                    <p class="text-gray-600 mb-8">
                        ${score >= 80 ? 'Excellent! You\'re well-prepared for emergencies.' : 
                          score >= 60 ? 'Good start! There are some areas to improve.' : 
                          'You have significant gaps in your preparedness. Let\'s work on improving!'}
                    </p>
                    <div class="space-y-3">
                        <button onclick="getRecommendations()" class="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                            Get Personalized Recommendations
                        </button>
                        <button onclick="retakeAssessment()" class="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors ml-4">
                            Retake Assessment
                        </button>
                    </div>
                </div>
            `;
            document.getElementById('assessment-content').innerHTML = content;
            document.getElementById('progress-bar').style.width = '100%';
            document.getElementById('progress-text').textContent = 'Assessment Complete';
        }

        function getRecommendations() {
            alert('📋 Personalized recommendations would be generated based on your assessment results. This would include specific action items, learning modules, and resources tailored to your needs.');
        }

        function retakeAssessment() {
            currentQuestion = 0;
            startAssessment();
        }

        // Module functionality
        function openModule(moduleType) {
            const modules = {
                natural: {
                    title: "🌪️ Natural Disasters",
                    content: `
                        <div class="space-y-6">
                            <p class="text-gray-600">Learn about different types of natural disasters and how to prepare for each one.</p>
                            
                            <div class="grid gap-4">
                                <div class="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                                    <h4 class="font-semibold text-lg mb-2">🌊 Floods & Flash Floods</h4>
                                    <p class="text-gray-600 text-sm">Understanding flood risks, evacuation procedures, and water safety.</p>
                                    <div class="mt-2 text-blue-600 text-sm">Duration: 15 minutes</div>
                                </div>
                                
                                <div class="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                                    <h4 class="font-semibold text-lg mb-2">🌪️ Tornadoes & Severe Weather</h4>
                                    <p class="text-gray-600 text-sm">Tornado safety, warning signs, and shelter procedures.</p>
                                    <div class="mt-2 text-blue-600 text-sm">Duration: 12 minutes</div>
                                </div>
                                
                                <div class="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                                    <h4 class="font-semibold text-lg mb-2">🔥 Wildfires</h4>
                                    <p class="text-gray-600 text-sm">Fire prevention, evacuation planning, and defensible space.</p>
                                    <div class="mt-2 text-blue-600 text-sm">Duration: 18 minutes</div>
                                </div>
                                
                                <div class="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                                    <h4 class="font-semibold text-lg mb-2">🏔️ Earthquakes</h4>
                                    <p class="text-gray-600 text-sm">Drop, cover, hold techniques and earthquake preparedness.</p>
                                    <div class="mt-2 text-blue-600 text-sm">Duration: 20 minutes</div>
                                </div>
                            </div>
                            
                            <button class="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                                Start Learning Path
                            </button>
                        </div>
                    `
                },
                kits: {
                    title: "🎒 Emergency Kits",
                    content: `
                        <div class="space-y-6">
                            <p class="text-gray-600">Build comprehensive emergency kits with our interactive checklist system.</p>
                            
                            <div class="bg-blue-50 p-4 rounded-lg">
                                <h4 class="font-semibold mb-2">📦 Basic 72-Hour Kit</h4>
                                <div class="space-y-2 text-sm">
                                    <label class="flex items-center">
                                        <input type="checkbox" class="mr-2"> Water (1 gallon per person per day)
                                    </label>
                                    <label class="flex items-center">
                                        <input type="checkbox" class="mr-2"> Non-perishable food (3-day supply)
                                    </label>
                                    <label class="flex items-center">
                                        <input type="checkbox" class="mr-2"> Battery-powered radio
                                    </label>
                                    <label class="flex items-center">
                                        <input type="checkbox" class="mr-2"> Flashlight and extra batteries
                                    </label>
                                    <label class="flex items-center">
                                        <input type="checkbox" class="mr-2"> First aid kit
                                    </label>
                                    <label class="flex items-center">
                                        <input type="checkbox" class="mr-2"> Whistle for signaling help
                                    </label>
                                </div>
                            </div>
                            
                            <div class="grid md:grid-cols-2 gap-4">
                                <button class="bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                                    🏠 Home Kit Checklist
                                </button>
                                <button class="bg-orange-600 text-white py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors">
                                    🚗 Vehicle Kit Checklist
                                </button>
                            </div>
                        </div>
                    `
                },
                firstaid: {
                    title: "🏥 First Aid Training",
                    content: `
                        <div class="space-y-6">
                            <p class="text-gray-600">Essential first aid skills that could save lives in emergency situations.</p>
                            
                            <div class="grid gap-4">
                                <div class="border rounded-lg p-4">
                                    <h4 class="font-semibold text-lg mb-2">🫁 CPR Basics</h4>
                                    <p class="text-gray-600 text-sm mb-3">Learn hands-only CPR techniques for adults and children.</p>
                                    <div class="bg-red-50 p-3 rounded text-sm">
                                        <strong>Remember:</strong> Push hard and fast in the center of the chest at least 2 inches deep at 100-120 compressions per minute.
                                    </div>
                                </div>
                                
                                <div class="border rounded-lg p-4">
                                    <h4 class="font-semibold text-lg mb-2">🩹 Wound Care</h4>
                                    <p class="text-gray-600 text-sm mb-3">Proper cleaning, dressing, and care of cuts and wounds.</p>
                                    <ol class="text-sm space-y-1 ml-4">
                                        <li>1. Clean hands thoroughly</li>
                                        <li>2. Stop bleeding with direct pressure</li>
                                        <li>3. Clean wound gently</li>
                                        <li>4. Apply antibiotic ointment</li>
                                        <li>5. Cover with sterile bandage</li>
                                    </ol>
                                </div>
                            </div>
                            
                            <button class="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
                                Start Interactive Training
                            </button>
                        </div>
                    `
                }
            };

            const module = modules[moduleType];
            if (module) {
                document.getElementById('modalTitle').textContent = module.title;
                document.getElementById('modalContent').innerHTML = module.content;
                document.getElementById('moduleModal').classList.remove('hidden');
            }
        }

        function closeModal() {
            document.getElementById('moduleModal').classList.add('hidden');
        }

        // Emergency contact functions
        function callEmergency(type) {
            const contacts = {
                '911': 'Calling Emergency Services (911)...',
                'poison': 'Calling Poison Control (1-800-222-1222)...'
            };
            alert(contacts[type] || 'Calling emergency contact...');
        }

        function openWeatherAlerts() {
            alert('🌦️ Weather Alert System\n\nCurrent Active Alerts:\n• Severe Thunderstorm Warning until 8:00 PM\n• Flash Flood Watch in effect\n\nStay indoors and monitor conditions.');
        }

        function openRedCross() {
            alert('➕ American Red Cross\n\nServices Available:\n• Disaster Relief\n• Emergency Shelter\n• Blood Services\n• Safety Training\n\nCall: 1-800-733-2767');
        }

        // Community functions
        function reportIncident() {
            alert('🚨 Incident Reporting\n\nThis would open a form to report:\n• Safety hazards\n• Infrastructure damage\n• Emergency situations\n• Community concerns');
        }

        function requestHelp() {
            alert('🆘 Request Help\n\nConnect with:\n• Local emergency services\n• Community volunteers\n• Disaster relief organizations\n• Neighbor assistance network');
        }

        function offerHelp() {
            alert('🤝 Offer Help\n\nVolunteer opportunities:\n• Emergency response team\n• Community preparedness education\n• Disaster relief support\n• Neighborhood assistance');
        }

        // Close modal when clicking outside
        document.getElementById('moduleModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
    </script>
<script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'979ec167713d8ae5',t:'MTc1NzAwMjIxMC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>
</html>
