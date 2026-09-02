"use strict";

const fixedTemplate = [
  "Full body fantasy monster game character reference",
  "single creature",
  "neutral pose",
  "standing or floating straight",
  "centered",
  "entire body visible",
  "clear readable silhouette",
  "simple large shapes",
  "moderate detail",
  "clean surface design",
  "clearly separated limbs",
  "suitable for 3D modeling",
  "plain white background",
  "even neutral studio lighting",
  "very soft contact shadow only",
  "no environment",
  "no scenery",
  "no fog",
  "no particles",
  "no text",
  "no watermark",
  "no cinematic lighting",
  "no dramatic pose"
];

const qualityChecks = [
  "только одно существо",
  "тело видно целиком",
  "силуэт читается в превью",
  "крупные формы важнее",
  "конечности разделены",
  "чистый фон",
  "одна главная идея",
  "детализация пригодна для 3D"
];

const baseOptions = {
  visualStyle: [
    ["dark fantasy dungeon", "Темное фэнтези: подземелье"],
    ["grim fairy-tale horror", "Мрачная сказка"],
    ["stylized game creature", "Стилизованное игровое существо"],
    ["necropolis fantasy", "Фэнтези-некрополь"],
    ["fungal underground fantasy", "Грибное подземелье"],
    ["abyssal fantasy horror", "Бездна и хоррор"]
  ],
  biome: [
    ["underground cave biome", "Подземелье"],
    ["dead forest biome", "Лес"],
    ["swamp biome", "Болота"],
    ["desert ruin biome", "Пустыня"],
    ["glacier biome", "Ледники"],
    ["volcanic biome", "Вулканы"],
    ["ancient ruins biome", "Руины"],
    ["necropolis biome", "Некрополь"],
    ["abyssal realm biome", "Бездна"],
    ["demonic realm biome", "Демоническая зона"],
    ["ancient laboratory biome", "Древняя лаборатория"]
  ],
  role: [
    ["scavenger", "Мелкий сборщик"],
    ["parasite", "Мелкий паразит"],
    ["crawler", "Мелкий ползун"],
    ["hunter", "Обычный охотник"],
    ["stalker", "Обычный преследователь"],
    ["predator", "Обычный хищник"],
    ["brute", "Тяжелый громила"],
    ["armored guardian", "Тяжелый бронированный страж"],
    ["spitter", "Дальнобойный плеватель"],
    ["spore launcher", "Дальнобойный споровик"],
    ["summoner", "Поддержка: призыватель"],
    ["brood mother", "Поддержка: матка выводка"],
    ["champion", "Элитный чемпион"],
    ["ancient boss creature", "Босс: древнее существо"]
  ],
  bodyPlan: [
    ["floating humanoid undead", "Гуманоид"],
    ["large quadrupedal beast", "Четвероногий"],
    ["six-legged underground hunter", "Шестиногий"],
    ["spider-like eight-legged creature", "Восьминогий"],
    ["serpentine worm-like creature", "Змеевидный"],
    ["floating skull-like creature", "Парящий"],
    ["amorphous slime body", "Бесформенный"],
    ["plant-root creature", "Растительный"],
    ["crab-like armored creature", "Крабоподобный"],
    ["bird-like predatory creature", "Птичий"],
    ["aquatic fish-like deep creature", "Рыбоподобный"],
    ["centauroid creature with humanoid upper body", "Кентавроид"],
    ["many-armed creature with four to eight arms", "Многорукий"],
    ["huge head on small legs", "Огромная голова"],
    ["headless creature with face on chest", "Безголовый"],
    ["colonial organism made of connected bodies", "Колониальный"]
  ],
  origin: [
    ["undead", "Нежить"],
    ["demonic", "Демоническое"],
    ["abyssal", "Бездонное"],
    ["fungal", "Грибное"],
    ["plant", "Растительное"],
    ["insectoid", "Насекомоподобное"],
    ["reptilian", "Рептильное"],
    ["amphibian", "Амфибийное"],
    ["aquatic", "Водное"],
    ["crystalline", "Кристаллическое"],
    ["stone", "Каменное"],
    ["elemental", "Стихийное"],
    ["parasitic", "Паразитическое"],
    ["mutated", "Мутировавшее"],
    ["spectral", "Призрачное"],
    ["construct", "Конструкт"]
  ],
  build: [
    ["thin", "Тонкое"],
    ["emaciated", "Истощенное"],
    ["massive", "Массивное"],
    ["stocky", "Коренастое"],
    ["elongated", "Вытянутое"],
    ["hunched", "Сгорбленное"],
    ["wide-bodied", "Широкое"],
    ["spider-like", "Паукообразное"],
    ["serpentine", "Змеевидное"],
    ["quadrupedal", "Четвероногое"],
    ["six-legged", "Шестиногое"],
    ["floating", "Парящее"]
  ],
  head: [
    ["faceless hood", "Безликий капюшон"],
    ["animal skull head", "Звериный череп"],
    ["single giant eye", "Один огромный глаз"],
    ["vertical mouth head", "Вертикальная пасть"],
    ["lamprey mouth", "Пасть миноги"],
    ["split jaw", "Расщепленная челюсть"],
    ["horned skull", "Рогатый череп"],
    ["beaked head", "Клювовидная голова"],
    ["smooth featureless head", "Гладкая безликая голова"],
    ["mushroom-shaped head", "Грибовидная голова"]
  ],
  limbs: [
    ["skeletal hands", "Скелетные кисти"],
    ["long claws", "Длинные когти"],
    ["hooked arms", "Крюкообразные руки"],
    ["heavy forearms", "Тяжелые предплечья"],
    ["tentacles", "Щупальца"],
    ["four arms", "Четыре руки"],
    ["scythe-like forelimbs", "Передние конечности-серпы"],
    ["short powerful legs", "Короткие мощные ноги"],
    ["long insect legs", "Длинные насекомьи ноги"],
    ["webbed limbs", "Перепончатые конечности"]
  ],
  material: [
    ["rotting flesh", "Гниющая плоть"],
    ["dry skin", "Сухая кожа"],
    ["black chitin", "Черный хитин"],
    ["bone plates", "Костяные пластины"],
    ["stone", "Камень"],
    ["crystal", "Кристалл"],
    ["fungus", "Грибная масса"],
    ["roots", "Корни"],
    ["ragged cloth", "Рваная ткань"],
    ["spectral material", "Призрачная материя"],
    ["scaled skin", "Чешуйчатая кожа"],
    ["leathery skin", "Кожистая шкура"]
  ],
  feature: [
    ["one giant vertical mouth on its chest", "Огромная вертикальная пасть на груди"],
    ["one enormous claw", "Один огромный коготь"],
    ["a glowing fungal colony growing from its back", "Светящаяся грибная колония на спине"],
    ["a completely empty hood instead of a face", "Пустой капюшон вместо лица"],
    ["one large cracked bone shell covering its back", "Большой треснувший костяной панцирь"],
    ["a ring of small blind eyes around the torso", "Кольцо маленьких слепых глаз вокруг торса"],
    ["long root tendrils dragging behind the body", "Длинные корневые жгуты за телом"],
    ["a single crystal spine rising from its back", "Один кристаллический шип на спине"],
    ["a split rib cage forming a cage-like chest", "Раскрытая грудная клетка как клетка"],
    ["one swollen parasitic sac attached to its side", "Раздутый паразитический мешок сбоку"]
  ],
  view: [
    ["front view", "Спереди"],
    ["front three-quarter view", "Три четверти спереди"],
    ["side view", "Сбоку"],
    ["back view", "Сзади"]
  ],
  complexity: [
    ["simple", "Простая"],
    ["moderate", "Умеренная"],
    ["high but readable", "Высокая, но читаемая"],
    ["boss-level, readable silhouette", "Боссовая, но читаемая"]
  ]
};

const editableOptionNames = {
  visualStyle: "Стиль",
  biome: "Среда",
  role: "Роль",
  bodyPlan: "Архитектура тела",
  origin: "Происхождение",
  build: "Телосложение",
  head: "Голова",
  limbs: "Конечности",
  material: "Материал",
  feature: "Одна сильная особенность",
  view: "Ракурс",
  complexity: "Сложность"
};

const customOptionsKey = "lgcm.customOptions";
let customOptions = {};
let options = cloneOptionMap(baseOptions);

const starterMonsters = [
  ["Слепой пещерный гуль", "hunter", "floating humanoid undead", "undead", "emaciated", "smooth featureless head", "long claws", "dry skin", "a ring of small blind eyes around the torso"],
  ["Каменный ползун", "crawler", "large quadrupedal beast", "stone", "stocky", "animal skull head", "short powerful legs", "stone", "one large cracked bone shell covering its back"],
  ["Грибной носитель", "spore launcher", "plant-root creature", "fungal", "hunched", "mushroom-shaped head", "hooked arms", "fungus", "a glowing fungal colony growing from its back"],
  ["Костяной паук", "stalker", "spider-like eight-legged creature", "undead", "spider-like", "horned skull", "long insect legs", "bone plates", "a split rib cage forming a cage-like chest"],
  ["Подземный призрак", "summoner", "floating humanoid undead", "spectral", "floating", "faceless hood", "skeletal hands", "spectral material", "a completely empty hood instead of a face"],
  ["Кристаллический хищник", "predator", "six-legged underground hunter", "crystalline", "elongated", "single giant eye", "scythe-like forelimbs", "crystal", "a single crystal spine rising from its back"],
  ["Червь-трупоед", "scavenger", "serpentine worm-like creature", "undead", "serpentine", "lamprey mouth", "short powerful legs", "rotting flesh", "one swollen parasitic sac attached to its side"],
  ["Корневой голем", "armored guardian", "plant-root creature", "plant", "massive", "smooth featureless head", "heavy forearms", "roots", "long root tendrils dragging behind the body"],
  ["Безголовый шахтер", "brute", "headless creature with face on chest", "mutated", "stocky", "vertical mouth head", "heavy forearms", "leathery skin", "one giant vertical mouth on its chest"],
  ["Летающий череп", "spitter", "floating skull-like creature", "undead", "floating", "horned skull", "tentacles", "bone plates", "one enormous claw"],
  ["Глубинный моллюск", "brood mother", "aquatic fish-like deep creature", "aquatic", "wide-bodied", "lamprey mouth", "webbed limbs", "leathery skin", "one swollen parasitic sac attached to its side"],
  ["Каменная горгулья", "champion", "bird-like predatory creature", "stone", "hunched", "horned skull", "long claws", "stone", "one large cracked bone shell covering its back"]
];

const ids = [
  "monsterName",
  "visualStyle",
  "biome",
  "role",
  "bodyPlan",
  "origin",
  "build",
  "head",
  "limbs",
  "material",
  "feature",
  "view",
  "complexity",
  "customFeature",
  "allowWeapon",
  "strict3d",
  "extraNegative"
];

const elements = Object.fromEntries(ids.map((id) => [id, document.getElementById(id)]));
const promptOutput = document.getElementById("promptOutput");
const batchOutput = document.getElementById("batchOutput");
const promptMeta = document.getElementById("promptMeta");
const qualityList = document.getElementById("qualityList");
const readabilityBadge = document.getElementById("readabilityBadge");
const toast = document.getElementById("toast");
const optionTarget = document.getElementById("optionTarget");
const optionLabel = document.getElementById("optionLabel");
const optionValue = document.getElementById("optionValue");
const customOptionList = document.getElementById("customOptionList");

let toastTimer = 0;

function cloneOptionMap(source) {
  return Object.fromEntries(Object.entries(source).map(([id, rows]) => [id, rows.map((row) => [...row])]));
}

function fillSelect(id, rows) {
  elements[id].innerHTML = "";
  rows.forEach(([value, label]) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    elements[id].append(option);
  });
}

function setValue(id, value) {
  const el = elements[id];
  if (el.type === "checkbox") {
    el.checked = Boolean(value);
    return;
  }
  el.value = value;
}

function getValue(id) {
  const el = elements[id];
  return el.type === "checkbox" ? el.checked : el.value.trim();
}

function getOptionLabel(id, value) {
  const row = options[id]?.find(([optionValue]) => optionValue === value);
  return row ? row[1] : value;
}

function hasOption(id, value) {
  return Boolean(options[id]?.some(([optionValue]) => optionValue === value));
}

function cleanPart(value) {
  return String(value || "").trim().replace(/\s+/g, " ");
}

function articleFor(word) {
  return /^[aeiou]/i.test(word) ? "an" : "a";
}

function buildPrompt(state = readState()) {
  const feature = cleanPart(state.customFeature || state.feature);
  const complexity = state.complexity === "simple" ? "simple large shapes" : `${state.complexity} detail`;
  const weaponRule = state.allowWeapon ? "weapon allowed only if visually essential" : "no weapon unless specified";

  const monsterBlock = [
    state.monsterName || "",
    `${state.visualStyle} ${state.biome} ${state.role} monster`,
    `${articleFor(state.bodyPlan)} ${state.bodyPlan}`,
    `${state.origin} origin`,
    `${state.build} body`,
    state.head,
    state.limbs,
    `body made of ${state.material}`,
    feature,
    complexity
  ].filter(Boolean);

  const template = [...fixedTemplate];
  const viewIndex = template.indexOf("entire body visible");
  template.splice(viewIndex + 1, 0, state.view);
  template.push(weaponRule);

  if (state.strict3d) {
    template.push("low visual noise");
    template.push("forms easy to reproduce as a game-ready 3D model");
  }

  if (state.extraNegative) {
    template.push(state.extraNegative);
  }

  return `${monsterBlock.join(", ")},\n\n${template.join(", ")}`;
}

function readState() {
  return Object.fromEntries(ids.map((id) => [id, getValue(id)]));
}

function applyState(state) {
  Object.entries(state).forEach(([id, value]) => {
    if (elements[id]) setValue(id, value);
  });
  updatePrompt();
}

function updatePrompt() {
  const state = readState();
  const prompt = buildPrompt(state);
  promptOutput.value = prompt;
  updateMeta(state, prompt);
}

function updateMeta(state, prompt) {
  const featureCount = state.customFeature.split(",").filter(Boolean).length || 1;
  const warning = featureCount > 1 || / and | with | plus /i.test(state.customFeature);

  readabilityBadge.textContent = warning ? "Слишком много идей" : "Силуэт OK";
  readabilityBadge.classList.toggle("warn", warning);

  promptMeta.innerHTML = "";
  [
    ["Роль", getOptionLabel("role", state.role)],
    ["Тело", getOptionLabel("bodyPlan", state.bodyPlan)],
    ["Особенность", state.customFeature || getOptionLabel("feature", state.feature)],
    ["Слов", String(prompt.split(/\s+/).filter(Boolean).length)],
    ["Ракурс", getOptionLabel("view", state.view)],
    ["3D", state.strict3d ? "строго" : "мягко"]
  ].forEach(([label, value]) => {
    const item = document.createElement("div");
    item.className = "meta-item";
    const labelNode = document.createElement("strong");
    labelNode.textContent = label;
    const valueNode = document.createElement("span");
    valueNode.textContent = value;
    item.append(labelNode, valueNode);
    promptMeta.append(item);
  });
}

function pick(rows) {
  return rows[Math.floor(Math.random() * rows.length)][0];
}

function randomState(index = 0) {
  return {
    monsterName: `Monster ${String(index + 1).padStart(2, "0")}`,
    visualStyle: pick(options.visualStyle),
    biome: pick(options.biome),
    role: pick(options.role),
    bodyPlan: pick(options.bodyPlan),
    origin: pick(options.origin),
    build: pick(options.build),
    head: pick(options.head),
    limbs: pick(options.limbs),
    material: pick(options.material),
    feature: pick(options.feature),
    view: "front view",
    complexity: Math.random() > 0.86 ? "boss-level, readable silhouette" : pick(options.complexity.slice(0, 3)),
    customFeature: "",
    allowWeapon: false,
    strict3d: true,
    extraNegative: ""
  };
}

function resetState() {
  applyState({
    monsterName: "",
    visualStyle: "dark fantasy dungeon",
    biome: "underground cave biome",
    role: "hunter",
    bodyPlan: "six-legged underground hunter",
    origin: "undead",
    build: "hunched",
    head: "smooth featureless head",
    limbs: "long claws",
    material: "leathery skin",
    feature: "one large cracked bone shell covering its back",
    view: "front view",
    complexity: "moderate",
    customFeature: "",
    allowWeapon: false,
    strict3d: true,
    extraNegative: ""
  });
}

async function copyText(text, label) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const field = document.createElement("textarea");
    field.value = text;
    document.body.append(field);
    field.select();
    document.execCommand("copy");
    field.remove();
  }
  showToast(label);
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("visible");
  toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 1700);
}

function loadCustomOptions() {
  try {
    const parsed = JSON.parse(localStorage.getItem(customOptionsKey) || "{}");
    return Object.fromEntries(
      Object.keys(editableOptionNames).map((id) => {
        const rows = Array.isArray(parsed[id]) ? parsed[id] : [];
        const cleanRows = rows
          .filter((row) => Array.isArray(row) && row.length >= 2)
          .map(([value, label]) => [cleanPart(value), cleanPart(label)])
          .filter(([value, label]) => value && label);
        return [id, cleanRows];
      })
    );
  } catch {
    return Object.fromEntries(Object.keys(editableOptionNames).map((id) => [id, []]));
  }
}

function saveCustomOptions() {
  localStorage.setItem(customOptionsKey, JSON.stringify(customOptions));
}

function rebuildOptions() {
  const current = readState();
  options = cloneOptionMap(baseOptions);
  Object.entries(customOptions).forEach(([id, rows]) => {
    if (options[id]) {
      rows.forEach(([value, label]) => {
        if (!options[id].some(([existingValue]) => existingValue === value)) {
          options[id].push([value, label]);
        }
      });
    }
  });

  Object.entries(options).forEach(([id, rows]) => {
    fillSelect(id, rows);
    if (current[id] && hasOption(id, current[id])) {
      elements[id].value = current[id];
    }
  });
}

function buildOptionTargetSelect() {
  optionTarget.innerHTML = "";
  Object.entries(editableOptionNames).forEach(([id, label]) => {
    const option = document.createElement("option");
    option.value = id;
    option.textContent = label;
    optionTarget.append(option);
  });
}

function addCustomOption() {
  const target = optionTarget.value;
  const label = cleanPart(optionLabel.value);
  const value = cleanPart(optionValue.value);

  if (!target || !label || !value) {
    showToast("Заполни русскую подпись и English");
    return;
  }

  if (hasOption(target, value)) {
    showToast("Такой English-вариант уже есть");
    return;
  }

  customOptions[target] = customOptions[target] || [];
  customOptions[target].push([value, label]);
  saveCustomOptions();
  rebuildOptions();
  elements[target].value = value;
  optionLabel.value = "";
  optionValue.value = "";
  renderCustomOptionList();
  updatePrompt();
  showToast("Вариант добавлен");
}

function deleteCustomOption(target, value) {
  customOptions[target] = (customOptions[target] || []).filter(([optionValue]) => optionValue !== value);
  saveCustomOptions();
  rebuildOptions();
  renderCustomOptionList();
  updatePrompt();
  showToast("Вариант удален");
}

function renderCustomOptionList() {
  const target = optionTarget.value;
  const rows = customOptions[target] || [];
  customOptionList.innerHTML = "";

  if (!rows.length) {
    const empty = document.createElement("div");
    empty.className = "custom-option-empty";
    empty.textContent = "Пользовательских вариантов в этом списке пока нет.";
    customOptionList.append(empty);
    return;
  }

  rows.forEach(([value, label]) => {
    const item = document.createElement("div");
    item.className = "custom-option-item";

    const text = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = label;
    const subtitle = document.createElement("span");
    subtitle.textContent = value;
    text.append(title, subtitle);

    const button = document.createElement("button");
    button.className = "delete-option-button";
    button.type = "button";
    button.textContent = "Удалить";
    button.addEventListener("click", () => deleteCustomOption(target, value));

    item.append(text, button);
    customOptionList.append(item);
  });
}

function buildStarterList() {
  const list = document.getElementById("starterList");
  list.innerHTML = "";
  starterMonsters.forEach((monster) => {
    const [name, role, bodyPlan, origin, build, head, limbs, material, feature] = monster;
    const button = document.createElement("button");
    button.className = "preset-card";
    button.type = "button";
    button.innerHTML = `<strong>${name}</strong><span>${getOptionLabel("role", role)} / ${getOptionLabel("bodyPlan", bodyPlan)}</span>`;
    button.addEventListener("click", () => {
      applyState({
        ...readState(),
        monsterName: name,
        role,
        bodyPlan,
        origin,
        build,
        head,
        limbs,
        material,
        feature,
        customFeature: ""
      });
    });
    list.append(button);
  });
}

function shuffleStarterList() {
  starterMonsters.sort(() => Math.random() - 0.5);
  buildStarterList();
}

function generateBatch() {
  const count = Math.max(1, Math.min(50, Number(document.getElementById("batchCount").value) || 10));
  const prompts = Array.from({ length: count }, (_, index) => {
    const state = randomState(index);
    return `Monster ${String(index + 1).padStart(2, "0")}\n${buildPrompt(state)}`;
  });
  batchOutput.value = prompts.join("\n\n---\n\n");
}

function savePreset() {
  const payload = {
    savedAt: new Date().toISOString(),
    source: "LGCM",
    state: readState(),
    prompt: promptOutput.value
  };
  const saved = JSON.parse(localStorage.getItem("lgcm.presets") || "[]");
  saved.unshift(payload);
  localStorage.setItem("lgcm.presets", JSON.stringify(saved.slice(0, 25)));
  showToast("Пресет сохранен локально");
}

function exportJson() {
  const payload = {
    app: "LGCM",
    version: "1.0.0",
    state: readState(),
    prompt: promptOutput.value,
    fixedTemplate,
    qualityChecks,
    customOptions
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "lgcm-monster-prompt.json";
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function init() {
  customOptions = loadCustomOptions();
  buildOptionTargetSelect();
  rebuildOptions();
  qualityChecks.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    qualityList.append(li);
  });

  ids.forEach((id) => {
    elements[id].addEventListener("input", updatePrompt);
    elements[id].addEventListener("change", updatePrompt);
  });

  document.getElementById("randomizeButton").addEventListener("click", () => applyState(randomState(0)));
  document.getElementById("resetButton").addEventListener("click", resetState);
  document.getElementById("copyPromptButton").addEventListener("click", () => copyText(promptOutput.value, "Промпт скопирован"));
  document.getElementById("generateBatchButton").addEventListener("click", generateBatch);
  document.getElementById("copyBatchButton").addEventListener("click", () => copyText(batchOutput.value, "Пакет скопирован"));
  document.getElementById("savePresetButton").addEventListener("click", savePreset);
  document.getElementById("exportButton").addEventListener("click", exportJson);
  document.getElementById("shuffleStarterButton").addEventListener("click", shuffleStarterList);
  document.getElementById("addOptionButton").addEventListener("click", addCustomOption);
  optionTarget.addEventListener("change", renderCustomOptionList);

  buildStarterList();
  renderCustomOptionList();
  resetState();
  generateBatch();
}

init();
