import styles from "./Sidebar.module.css"

const Sidebar = () => {
    return (
        <div className={styles.sidebarContainer}>
            <div className={styles.sidebar}>
                <a className={styles.active} href="#home">Home</a>
                <a href="#myRecipes">My Recipes</a>
            </div>
        </div>
    )
}

export default Sidebar;
