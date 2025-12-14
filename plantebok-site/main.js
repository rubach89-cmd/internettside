// Enkel klientlogikk for å hente data/plants.json og vise arter
const DATA_URL = './data/plants.json';

async function loadPlants(){
  try{
    const res = await fetch(DATA_URL);
    const data = await res.json();
    window.PLANTS = data;
    renderPlants(data);
    populateHabitatFilter(data);
  }catch(e){
    document.getElementById('plant-list').innerHTML = '<p>Kunne ikke laste data.</p>';
    console.error(e);
  }
}

function renderPlants(plants){
  const list = document.getElementById('plant-list');
  list.innerHTML = '';
  plants.forEach(p => {
    const el = document.createElement('article');
    el.className = 'card';
    el.innerHTML = `<h3>${p.norwegian} <small>(${p.latin})</small></h3>
      <p><strong>Habitat:</strong> ${p.habitat || '-'} </p>
      <p>${p.short || ''}</p>`;
    list.appendChild(el);
  });
}

function populateHabitatFilter(plants){
  const sel = document.getElementById('filter-habitat');
  const habitats = Array.from(new Set(plants.map(p=>p.habitat).filter(Boolean))).sort();
  habitats.forEach(h=>{const o=document.createElement('option');o.value=h;o.textContent=h;sel.appendChild(o)});
  sel.addEventListener('change',()=>applyFilters());
}

function applyFilters(){
  const q = document.getElementById('search').value.toLowerCase();
  const habitat = document.getElementById('filter-habitat').value;
  const filtered = (window.PLANTS||[]).filter(p=>{
    const matchesQ = !q || p.norwegian.toLowerCase().includes(q) || p.latin.toLowerCase().includes(q) || (p.short||'').toLowerCase().includes(q);
    const matchesH = !habitat || p.habitat===habitat;
    return matchesQ && matchesH;
  });
  renderPlants(filtered);
}

// Search
document.getElementById('search').addEventListener('input', () => applyFilters());

// Quiz (enkel sample-quiz)
const quizBtn = document.getElementById('start-quiz');
quizBtn && quizBtn.addEventListener('click', ()=>{
  const sample = (window.PLANTS || []).slice(0,3);
  if(!sample.length){document.getElementById('quiz-question').textContent='Ingen data for quiz.'; return}
  const q = sample[0];
  document.getElementById('quiz-question').innerHTML = `<p>Hvilken plante har norsk navn <strong>${q.norwegian}</strong>?</p>`;
  const answers = [q.latin, ...(sample.slice(1).map(s=>s.latin))];
  const ansWrap = document.getElementById('quiz-answers');
  ansWrap.innerHTML = '';
  answers.sort(()=>Math.random()-0.5).forEach(a=>{
    const b = document.createElement('button'); b.textContent = a; b.className='button';
    b.addEventListener('click', ()=>{
      document.getElementById('quiz-result').textContent = a===q.latin? 'Riktig!': 'Feil — riktig svar er '+q.latin;
    });
    ansWrap.appendChild(b);
  });
});

// Init
loadPlants();
