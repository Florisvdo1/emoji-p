// Data voor emoji's per categorie
const emojiData = {
  smileys: ['😀','😁','😂','🤣','😃','😄','😅','😆','😉','😊','😇','🙂','🙃','😌','😍','🥰','😘','😗','😙','😚','😋','😛','😜','🤪','😝','🤑','🤗','🤭','🤫','🤔','🤐','🤨','😐','😑','😶','😏','😒','🙄','😬','🤥','😌','😔','😪','🤤','😴','😷','🤒','🤕','🤢','🤮','🤧','🥵','🥶','🥴','😵','🤯','🤠','🥳','😎','🤓','🧐','😕','😟','🙁','☹️','😮','😯','😲','😳','🥺','😦','😧','😨','😰','😥','😢','😭','😱','😖','😣','😞','😓','😩','😫','🥱','😤','😡','😠','🤬','😈','👿','💀','☠️','💩','🤡','👹','👺','👻','👽','👾','🤖','😺','😸','😹','😻','😼','😽','🙀','😿','😾'],
  animals: ['🐶','🐱','🐭','🐹','🐰','🦊','🦝','🐻','🐼','🦘','🦡','🐨','🐯','🦁','🐮','🐷','🐽','🐸','🐵','🙈','🙉','🙊','🐒','🐔','🐧','🐦','🐤','🐣','🐥','🦆','🦅','🦉','🦇','🐺','🐗','🐴','🦄','🐝','🐛','🦋','🐌','🐞','🐜','🦗','🕷','🕸','🦂','🐢','🐍','🦎','🦖','🦕','🐙','🦑','🦐','🦞','🦀','🐡','🐠','🐟','🐬','🐳','🐋','🦈','🐊','🐅','🐆','🦓','🦍','🦧','🐘','🦛','🦏','🐪','🐫','🦒','🐃','🐂','🐄','🐎','🐖','🐏','🐑','🐐','🦌','🐕','🐩','🐈','🐓','🦃','🕊','🐇','🐁','🐀','🐿','🦔'],
  nature: ['🌵','🎄','🌲','🌳','🌴','🌱','🌿','☘️','🍀','🎍','🎋','🍃','🍂','🍁','🍄','🌾','💐','🌷','🌹','🥀','🌺','🌸','🌼','🌻','🌞','🌝','🌛','🌜','🌚','🌕','🌖','🌗','🌘','🌑','🌒','🌓','🌔','🌙','🌎','🌍','🌏','💫','⭐','🌟','✨','⚡','☄️','💥','🔥','🌪','🌈','☀️','🌤','⛅','🌥','☁️','🌦','🌧','⛈','🌩','🌨','❄️','☃️','⛄','🌬','💨','💧','💦','☔','☂️','🌊','🌫'],
  food: ['🍏','🍎','🍐','🍊','🍋','🍌','🍉','🍇','🍓','🍈','🍒','🍑','🥭','🍍','🥥','🥝','🍅','🍆','🥑','🥦','🥒','🥬','🌶','🌽','🥕','🥔','🍠','🥐','🍞','🥖','🥨','🥯','🧀','🥚','🍳','🧈','🥞','🧇','🥓','🥩','🍗','🍖','🌭','🍔','🍟','🍕','🥪','🥙','🧆','🌮','🌯','🥗','🥘','🥫','🍝','🍜','🍲','🍛','🍣','🍱','🥟','🍤','🍙','🍚','🍘','🍥','🥮','🥠','🍢','🍡','🍧','🍨','🍦','🥧','🧁','🍰','🎂','🍮','🍭','🍬','🍫','🍿','🧂'],
  activities: ['⚽','🏀','🏈','⚾','🎾','🏐','🏉','🥏','🎱','🪀','🏓','🏸','🥅','🏒','🏑','🥍','🏏','⛳','🏹','🎣','🤿','🥊','🥋','🎽','🛹','🛷','⛸','🥌','🎿','⛷','🏂','🪂','🏋️‍♀️','🏋️‍♂️','🤼‍♀️','🤼‍♂️','🤸‍♀️','🤸‍♂️','⛹️‍♀️','⛹️‍♂️','🤺','🤾‍♀️','🤾‍♂️','🏌️‍♀️','🏌️‍♂️','🏇','🧘‍♀️','🧘‍♂️','🏄‍♀️','🏄‍♂️','🏊‍♀️','🏊‍♂️','🤽‍♀️','🤽‍♂️','🚣‍♀️','🚣‍♂️','🧗‍♀️','🧗‍♂️','🚵‍♀️','🚵‍♂️','🚴‍♀️','🚴‍♂️','🏆','🎖','🏅','🥇','🥈','🥉','🎗','🏵','🎫','🎟'],
  travel: ['🚗','🚕','🚙','🚌','🚎','🏎','🚓','🚑','🚒','🚐','🛻','🚚','🚛','🚜','🏍','🛵','🦽','🦼','🛺','🚲','🛴','🛹','🚏','🛣','🛤','🛢','⛽','🚨','🚥','🚦','🛑','🚧','⚓','⛵','🛶','🚤','🛳','⛴','🛥','🚢','✈️','🛩','🛫','🛬','💺','🚁','🚟','🚠','🚡','🛰','🚀','🛸','🌌','🛎','🧳'],
  objects: ['⌚','📱','📲','💻','⌨️','🖥','🖨','🖱','🖲','🕹','🗜','💽','💾','💿','📀','📼','📷','📸','📹','🎥','📽','🎞','📞','☎️','📟','📠','📺','📻','🎙','🎚','🎛','⏱','⏲','⏰','🕰','⌛','⏳','📡','🔋','🔌','💡','🔦','🕯','🪔','🧯','🛢','💸','💵','💴','💶','💷','💰','💳','💎','⚖️','🪙','🔧','🔨','⚒️','🛠','⛏','🔩','⚙️','🗜','⚗','🔬','🔭','📡','💉','💊','🩸','🩹','🩺','🚪','🛏','🛋','🪑','🚽','🚿','🛁','🪠','🧴','🧷','🧹','🧺','🧻','🧼','🪒','🧽','🧯','🛒'],
  symbols: ['❤️','🧡','💛','💚','💙','💜','🖤','🤍','🤎','💔','❤️‍🔥','❤️‍🩹','💕','💞','💓','💗','💖','💘','💝','💟','☮️','✝️','☪️','🕉️','☸️','✡️','🔯','🕎','☯️','☦️','🛐','⛎','♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓','🆔','⚛️','🉑','☢️','☣️','📴','📳','🈶','🈚','🈸','🈺','🈷️','✴️','🆚','💮','🉐','㊙️','㊗️','🈴','🈵','🈹','🈲','🅰️','🅱️','🆎','🆑','🅾️','🆘','❌','⭕','🛑','⛔','📛','🚫','💯','💢','♨️','🚷','🚯','🚳','🚱','🔞','📵','🚭','❗','❕','❓','❔','‼️','⁉️','🔅','🔆','〽️','⚠️','🚸','🔱','⚜️','🔰','♻️','✅','🈯','💹','❇️','✳️','❎','🌐','💠','Ⓜ️','🌀','💤','🏧','🚾','♿','🅿️','🛗','🈳','🈂️','🛂','🛃','🛄','🛅','🚹','🚺','🚼','🚻','🚮','🎦','📶','🈁','🔣','ℹ️','🔤','🔡','🔠','🆖','🆗','🆙','🆒','🆕','🆓','0️⃣','1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟','🔢','#️⃣','*️⃣'],
  flags: ['🏳️','🏴','🏁','🚩','🏳️‍🌈','🏳️‍⚧️','🇦🇫','🇦🇱','🇩🇿','🇦🇸','🇦🇩','🇦🇴','🇦🇮','🇦🇶','🇦🇬','🇦🇷','🇦🇲','🇦🇼','🇦🇺','🇦🇹','🇦🇿','🇧🇸','🇧🇭','🇧🇩','🇧🇧','🇧🇾','🇧🇪','🇧🇿','🇧🇯','🇧🇲','🇧🇹','🇧🇴','🇧🇦','🇧🇼','🇧🇷','🇧🇳','🇧🇬','🇧🇫','🇧🇮','🇰🇭','🇨🇲','🇨🇦','🇨🇻','🇰🇾','🇨🇫','🇹🇩','🇨🇱','🇨🇳','🇨🇴','🇰🇲','🇨🇩','🇨🇬','🇨🇷','🇨🇮','🇭🇷','🇨🇺','🇨🇾','🇨🇿','🇩🇰','🇩🇯','🇩🇲','🇩🇴','🇪🇨','🇪🇬','🇸🇻','🇬🇶','🇪🇷','🇪🇪','🇸🇿','🇪🇹','🇫🇯','🇫🇮','🇫🇷','🇬🇫','🇵🇫','🇬🇦','🇬🇲','🇬🇪','🇩🇪','🇬🇭','🇬🇷','🇬🇱','🇬🇩','🇬🇺','🇬🇹','🇬🇳','🇬🇼','🇬🇾','🇭🇹','🇭🇳','🇭🇰','🇭🇺','🇮🇸','🇮🇳','🇮🇩','🇮🇷','🇮🇶','🇮🇪','🇮🇱','🇮🇹','🇯🇲','🇯🇵','🇯🇴','🇰🇿','🇰🇪','🇰🇮','🇽🇰','🇰🇼','🇰🇬','🇱🇦','🇱🇻','🇱🇧','🇱🇸','🇱🇷','🇱🇾','🇱🇮','🇱🇹','🇱🇺','🇲🇴','🇲🇰','🇲🇬','🇲🇼','🇲🇾','🇲🇻','🇲🇱','🇲🇹','🇲🇭','🇲🇶','🇲🇷','🇲🇺','🇲🇽','🇫🇲','🇲🇩','🇲🇨','🇲🇳','🇲🇪','🇲🇸','🇲🇦','🇲🇿','🇲🇲','🇳🇦','🇳🇷','🇳🇵','🇳🇱','🇳🇨','🇳🇿','🇳🇮','🇳🇪','🇳🇬','🇳🇺','🇰🇵','🇲🇵','🇳🇴','🇴🇲','🇵🇰','🇵🇼','🇵🇸','🇵🇦','🇵🇬','🇵🇾','🇵🇪','🇵🇭','🇵🇱','🇵🇹','🇵🇷','🇶🇦','🇷🇴','🇷🇺','🇷🇼','🇼🇸','🇸🇲','🇸🇦','🇸🇳','🇷🇸','🇸🇨','🇸🇱','🇸🇬','🇸🇰','🇸🇮','🇸🇧','🇸🇴','🇿🇦','🇰🇷','🇸🇸','🇪🇸','🇱🇰','🇸🇩','🇸🇷','🇸🇪','🇨🇭','🇸🇾','🇹🇼','🇹🇯','🇹🇿','🇹🇭','🇹🇬','🇹🇴','🇹🇹','🇹🇳','🇹🇷','🇹🇲','🇹🇻','🇺🇬','🇺🇦','🇦🇪','🇬🇧','🇺🇸','🇺🇾','🇺🇿','🇻🇺','🇻🇦','🇻🇪','🇻🇳','🇾🇪','🇿🇲','🇿🇼'],
// Add more categories here
};

// Category Management
let currentCategoryIndex = 0;
const categories = Object.keys(emojiData);

// DOM Elements
const emojiGrid = document.getElementById('emoji-grid');
const categoryName = document.getElementById('category-name');
const huiswerkButton = document.getElementById('huiswerk-button');
let draggedEmoji = null;
let currentPlaceholder = null;

// Load Emojis into the Grid
function loadEmojis() {
  const category = categories[currentCategoryIndex];
  categoryName.textContent = category.charAt(0).toUpperCase() + category.slice(1);
  emojiGrid.innerHTML = ''; // Clear the grid
  emojiData[category].forEach((emoji) => {
    const emojiDiv = document.createElement('div');
    emojiDiv.textContent = emoji;
    emojiDiv.className = 'emoji-item';
    emojiDiv.draggable = true;

    // Drag Event Listeners for Desktop
    emojiDiv.addEventListener('dragstart', handleDragStart);
    emojiDiv.addEventListener('dragend', handleDragEnd);

    // Touch Event Listeners for Mobile
    emojiDiv.addEventListener('touchstart', handleTouchStart);
    emojiDiv.addEventListener('touchmove', handleTouchMove);
    emojiDiv.addEventListener('touchend', handleTouchEnd);

    emojiGrid.appendChild(emojiDiv);
  });
}

// Handle Drag Start
function handleDragStart(e) {
  draggedEmoji = e.target;
  if (navigator.vibrate) navigator.vibrate(50); // Vibrate on drag start
  draggedEmoji.classList.add('dragging');
}

// Handle Drag Over Placeholder
function handleDragOver(e) {
  e.preventDefault();
  const placeholder = e.target.closest('.emoji-placeholder');
  if (!placeholder || placeholder === currentPlaceholder) return;

  // Highlight the placeholder
  if (currentPlaceholder) currentPlaceholder.classList.remove('highlight');
  placeholder.classList.add('highlight');
  currentPlaceholder = placeholder;
}

// Handle Drop
function handleDrop(e) {
  e.preventDefault();
  const placeholder = currentPlaceholder || e.target.closest('.emoji-placeholder');
  if (!placeholder || !draggedEmoji) return;

  // Place the emoji into the placeholder
  placeholder.textContent = draggedEmoji.textContent;
  placeholder.classList.remove('highlight');
  if (navigator.vibrate) navigator.vibrate(100); // Vibrate on successful drop
  draggedEmoji = null;
  currentPlaceholder = null;
}

// Handle Drag End
function handleDragEnd() {
  if (currentPlaceholder) currentPlaceholder.classList.remove('highlight');
  draggedEmoji?.classList.remove('dragging');
  draggedEmoji = null;
}

// Touch Event Handlers for Mobile
function handleTouchStart(e) {
  const touch = e.touches[0];
  draggedEmoji = e.target;
  draggedEmoji.classList.add('dragging');
  draggedEmoji.style.position = 'absolute';
  if (navigator.vibrate) navigator.vibrate(50);
  updateEmojiPosition(touch.pageX, touch.pageY);
}

function handleTouchMove(e) {
  e.preventDefault();
  const touch = e.touches[0];
  updateEmojiPosition(touch.pageX, touch.pageY);

  // Handle magnet effect for placeholders
  const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);
  const placeholder = elementBelow?.closest('.emoji-placeholder');
  if (placeholder !== currentPlaceholder) {
    if (currentPlaceholder) currentPlaceholder.classList.remove('highlight');
    if (placeholder) placeholder.classList.add('highlight');
    currentPlaceholder = placeholder;
  }
}

function handleTouchEnd(e) {
  const touch = e.changedTouches[0];
  const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);
  const placeholder = elementBelow?.closest('.emoji-placeholder');
  if (placeholder) {
    placeholder.textContent = draggedEmoji.textContent;
    if (navigator.vibrate) navigator.vibrate(100);
  }
  draggedEmoji?.classList.remove('dragging');
  if (currentPlaceholder) currentPlaceholder.classList.remove('highlight');
  draggedEmoji = null;
  currentPlaceholder = null;
}

// Update Emoji Position for Mobile
function updateEmojiPosition(x, y) {
  draggedEmoji.style.left = `${x - draggedEmoji.offsetWidth / 2}px`;
  draggedEmoji.style.top = `${y - draggedEmoji.offsetHeight / 2}px`;
  draggedEmoji.style.zIndex = '1000';
}

// Navigation Functions
function navigateCategory(direction) {
  if (direction === 'next') {
    currentCategoryIndex = (currentCategoryIndex + 1) % categories.length;
  } else if (direction === 'prev') {
    currentCategoryIndex = (currentCategoryIndex - 1 + categories.length) % categories.length;
  }
  loadEmojis();
}

// Confetti Animation
function triggerConfetti() {
  const confetti = document.createElement('div');
  confetti.className = 'confetti-animation';
  document.body.appendChild(confetti);
  setTimeout(() => confetti.remove(), 3000);
}

// Huiswerk Button Logic
huiswerkButton.addEventListener('click', () => {
  huiswerkButton.classList.add('green');
  triggerConfetti();
});

// Navigation Button Event Listeners
document.getElementById('next-category').addEventListener('click', () => navigateCategory('next'));
document.getElementById('prev-category').addEventListener('click', () => navigateCategory('prev'));

// Initialize the Application
document.querySelectorAll('.emoji-placeholder').forEach((placeholder) => {
  placeholder.addEventListener('dragover', handleDragOver);
  placeholder.addEventListener('drop', handleDrop);
});
loadEmojis();
