import banner1 from '../images/banner-1.jpg'
import banner2 from '../images/banner-2.jpg'



export const CategoriesList = [
  {id: 1, title: 'Супы', icon: '/icons/soup.png', activeIcon: '/icons/soup_active.png'},
  {id: 2, title: 'Поке', icon: '/icons/Noodles.png', activeIcon: '/icons/noodles_active.png'},
  {id: 3, title: 'Вок', icon: '/icons/wok.png', activeIcon: '/icons/wok_active.png'},
  {id: 4, title: 'Суши', icon: '/icons/sushi.png', activeIcon: '/icons/sushi_active.png'},
  {id: 5, title: 'Сеты', icon: '/icons/plate.png', activeIcon: '/icons/plate_active.png'},
  {id: 6, title: 'Роллы', icon: '/icons/rolls.png', activeIcon: '/icons/rolls_active.png'},
  {id: 7, title: 'Напитки', icon: '/icons/drinks.png', activeIcon: '/icons/drinks_active.png'},
  {id: 8, title: 'Топпинги', icon: '/icons/toppings.png', activeIcon: '/icons/toppings_active.png'},
]

export const rollsTypes = [
  { id: 1, title: 'Классические роллы', icon: '/icons/rolls.png', activeIcon: '/icons/rolls_active.png' },
  { id: 2, title: 'Запеченные роллы', icon: '/icons/rolls.png', activeIcon: '/icons/rolls_active.png' },
  { id: 3, title: 'Жаренные роллы', icon: '/icons/rolls.png', activeIcon: '/icons/rolls_active.png' },
]

export const NavList = [
  { id: 1, title: 'Рекомендации', route: '#recomendation' },
  { id: 2, title: 'Меню', route: '#menu' },
  { id: 3, title: 'Акции' },
]


// export const slidelist = [
//   {
//     id: 1, 
//     img: '/img/roll.jpg',
//     text: 'при заказе на 999 рублей калифорния роллы в подарок'
//   },
//   {
//     id: 2, 
//     img: '/img/banner.png',
//   },
//   {
//     id: 3, 
//     img: '/img/banner.png',
//   },
// ]

export const slidelist = [
  {
    id: 1,
    img: banner1,
    text: 'Мы считаем, что то, как вы выглядите, и то, как вы себя чувствуете, неразрывно связано. Вот почему мы берем лучшее из науки и природы, чтобы создавать косметические продукты, персонализированные специально для вас!',
    title: 'Закажите наши вкусные блюда на сумму 999 рублей и получите в подарок утонченные калифорния роллы!',
    backgroundColor: '#F6EEE8',
    color: '#a0663a',
  },
  {
    id: 2,
    img: banner2,
    text: 'Дышите глубоко. Часто увлажняйте. Это твой дом, твое пространство. И вы хотите, чтобы он был чистым без ущерба для безопасности. Очистители воздуха, фильтрация воды, приготовление пищи и уборка. Да, у нас есть для вас.',
    title: 'Скидка на самовывоз 15% все меню',
    backgroundColor: '#E5FDFE',
    color: '#396E75',
  },
]