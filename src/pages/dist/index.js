'use strict'
exports.__esModule = true
var head_1 = require('next/head')
var Home_module_css_1 = require('../../styles/Home.module.css')
function Home(_a) {
  var _b = _a.title,
    title = _b === void 0 ? 'React Avançado' : _b,
    _c = _a.frase,
    frase = _c === void 0 ? 'Bem vindo' : _c
  return React.createElement(
    'div',
    { className: Home_module_css_1['default'].container },
    React.createElement(
      head_1['default'],
      null,
      React.createElement('title', null, ' ', title, ' '),
      React.createElement('link', { rel: 'icon', href: '/favicon.ico' })
    ),
    React.createElement(
      'main',
      { className: Home_module_css_1['default'].main },
      React.createElement(
        'h1',
        { className: Home_module_css_1['default'].title },
        frase,
        ' ',
        React.createElement('a', { href: 'https://nextjs.org' }, 'Next.js!')
      ),
      React.createElement(
        'p',
        { className: Home_module_css_1['default'].description },
        'Get started by editing',
        ' ',
        React.createElement(
          'code',
          { className: Home_module_css_1['default'].code },
          'pages/index.js'
        )
      ),
      React.createElement(
        'div',
        { className: Home_module_css_1['default'].grid },
        React.createElement(
          'a',
          {
            href: 'https://nextjs.org/docs',
            className: Home_module_css_1['default'].card
          },
          React.createElement('h3', null, 'Documentation \u2192'),
          React.createElement(
            'p',
            null,
            'Find in-depth information about Next.js features and API.'
          )
        ),
        React.createElement(
          'a',
          {
            href: 'https://nextjs.org/learn',
            className: Home_module_css_1['default'].card
          },
          React.createElement('h3', null, 'Learn \u2192'),
          React.createElement(
            'p',
            null,
            'Learn about Next.js in an interactive course with quizzes!'
          )
        ),
        React.createElement(
          'a',
          {
            href: 'https://github.com/vercel/next.js/tree/master/examples',
            className: Home_module_css_1['default'].card
          },
          React.createElement('h3', null, 'Examples \u2192'),
          React.createElement(
            'p',
            null,
            'Discover and deploy boilerplate example Next.js projects.'
          )
        ),
        React.createElement(
          'a',
          {
            href:
              'https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
            className: Home_module_css_1['default'].card
          },
          React.createElement('h3', null, 'Deploy \u2192'),
          React.createElement(
            'p',
            null,
            'Instantly deploy your Next.js site to a public URL with Vercel.'
          )
        )
      )
    ),
    React.createElement(
      'footer',
      { className: Home_module_css_1['default'].footer },
      React.createElement(
        'a',
        {
          href:
            'https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
          target: '_blank',
          rel: 'noopener noreferrer'
        },
        'Powered by',
        ' ',
        React.createElement('img', {
          src: '/vercel.svg',
          alt: 'Vercel Logo',
          className: Home_module_css_1['default'].logo
        })
      )
    )
  )
}
exports['default'] = Home
