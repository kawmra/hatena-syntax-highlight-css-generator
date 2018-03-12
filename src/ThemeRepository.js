class ThemeRepository {

    save(theme) {
        const themeJson = JSON.stringify(theme)
        localStorage.setItem('theme', themeJson)
    }

    load() {
        const themeJson = localStorage.getItem('theme')
        return JSON.parse(themeJson)
    }

    clear() {
        localStorage.removeItem('theme')
    }
}

export default new ThemeRepository()