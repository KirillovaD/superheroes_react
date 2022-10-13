
import './App.css';
import Hero from './components/createHero/createHero';
// import loadData from './components/loadData/loadData';


let heroesJSON = `[{
  "id": "Batman",
  "name": "Бэтмен",
  "universe": "DC Comics",
  "alterEgo": "Брюс Уэйн",
  "work": "борец с преступностью, филантроп, миллиардер",
  "friends": "Робин, Бэтгерл",
  "superpower": "интеллект, обширные познания, знания боевых искусств, ловкость",
  "img": "https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg"
}, {
  "id": "Superman",
  "name": "Супермен",
  "universe": "DC Comics",
  "alterEgo": "Кларк Кент",
  "work": "борец за справедливость",
  "friends": "собака Крипто",
  "superpower": "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм",
  "img": "https://n1s1.hsmedia.ru/06/d3/73/06d37321618034ec5f2a65b09c8576e3/547x397_0xac120002_45567661540468871.jpg"
}, {
  "id": "Ironman",
  "name": "Железный человек",
  "universe": "Marvel Comics",
  "alterEgo": "Тони Старк",
  "work": "гений, миллиардер, плейбой, филантроп",
  "friends": "Мстители",
  "superpower": "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
  "img": "https://n1s1.hsmedia.ru/7b/56/08/7b5608ec3df83d872fa1162fb9e32f28/547x397_0xac120002_1773711401540468871.jpg"
}, {
  "id": "Spiderman",
  "name": "Человек-паук",
  "universe": "Marvel Comics",
  "alterEgo": "Питер Паркер",
  "work": "борец за справедливость, студент, фотограф",
  "friends": "Мстители, Фантастическая четверка, Люди Икс",
  "superpower": "сверхчеловеческие рефлексы, паучье чутье, способность прилепляться к твердым поверхностям, производство паутины",
  "img": "https://n1s1.hsmedia.ru/37/39/74/373974effcc7ccd093d849e8fa062091/547x397_0xac120002_9548247751540468871.jpg"
}, {
  "id": "captanAmerica",
  "name": "Капитан Америка",
  "universe": "Marvel Comics",
  "alterEgo": "Стивен Роджерс",
  "work": "супер-солдат",
  "friends": "Мстители",
  "superpower": "сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя",
  "img": "https://n1s1.hsmedia.ru/41/8f/05/418f050c767eeca8854b328914c7bccc/547x397_0xac120002_20106541761540468871.jpg"
}, {
  "id": "Tor",
  "name": "Тор",
  "universe": "Marvel Comics",
  "alterEgo": "нет, полное имя — Тор Одинсон",
  "work": "борец за справедливость, скандинавский бог",
  "friends": "Мстители",
  "superpower": "все, что может бог, плюс молот Мьелнир",
  "img": "https://n1s1.hsmedia.ru/52/a3/e1/52a3e14a0c8f02715b763e7a20fe1c00/547x397_0xac120002_19311926741540468872.jpg"
}, {
  "id": "Halk",
  "name": "Халк",
  "universe": "Marvel Comics",
  "alterEgo": "Брюс Беннер",
  "work": "супергерой, борец за справедливость, ученый-биохимик",
  "friends": "Мстители",
  "superpower": "сверхчеловеческая сила искорость, выносливость, полет",
  "img": "https://n1s1.hsmedia.ru/9a/28/e7/9a28e7b059594fc10387669ae4bd2f22/547x397_0xac120002_20162335021540468872.jpg"
}, {
  "id": "Wonderwoman",
  "name": "Чудо-женщина",
  "universe": "DC Comics",
  "alterEgo": "Диана Принс",
  "work": "супергероиня, секретарь-референт",
  "friends": "Лига Справедливости, Бэтмен, Супермен",
  "superpower": "ссверхчеловеческая сила и скорость, выносливость, полет",
  "img": "https://n1s1.hsmedia.ru/87/ed/c5/87edc525d8813c7b2899e04a4e562fe9/547x397_0xac120002_6444132261540468872.jpg"
}, {
  "id": "Blackwedow",
  "name": "Черная вдова",
  "universe": "Marvel Comics",
  "alterEgo": "Наташа Романофф",
  "work": "супергероиня, шпионка",
  "friends": "Мстители",
  "superpower": "пик человеческого физического потенциала, замедленное старение, знание многих языков",
  "img": "https://n1s1.hsmedia.ru/e0/2b/55/e02b55b147eeaff9b3fe6bdbb36ff9ea/547x397_0xac120002_744074131540468872.jpg"
}, {
  "id": "Deadpul",
  "name": "Дэдпул",
  "universe": "Marvel Comics",
  "alterEgo": "Уэйд Уинстон Уилсон",
  "work": "антигерой, наемник",
  "friends": "частично Мстители, Человек-паук, Росомаха",
  "superpower": "высокий болевой порог, регенерация и бессмертие, сверхчеловеческая иммунная система",
  "img": "https://n1s1.hsmedia.ru/34/93/39/3493392c94fc2ae0552ef9c7e87f2617/728x382_1_cc2a743fd686b7b2e256c062966bb465@1034x543_0xac120002_2692921231540468872.jpg"
}]`;
 
let heroes = JSON.parse(heroesJSON);


function App() {
  return (
    <div className="App">
        {
          heroes.map((hero)=>
          <Hero id={hero.id} name={hero.name} universe={hero.universe} alterEgo={hero.alterEgo} work={hero.work} friends={hero.friends} superpower={hero.superpower} src={hero.img} />
          )
        }
    </div>
  );
}
export default App