import main from './app'

if (module.hot) {
    module.hot.accept('./app/index.js', () => {
        main()
    })
}

main()
