import styles from '../../styles/team.module.css'

export default function Team() {
    return <div>
        <div className='component_title'>НАША КОМАНДА</div>
        <div className={styles.main_container}>
            <div className={styles.content_container}>
                <div>
                    <img src={'/images/ourteam/alexGerman.png'}/>
                    <p className={styles.team_member_name}>Alex German</p>
                    <p className={styles.team_member_description}>великий и ужасный</p>
                </div>
                <div>
                    <img src={'/images/ourteam/yuriyPrihvatilo.png'}/>
                    <p className={styles.team_member_name}>Юрии Прохватило</p>
                    <p className={styles.team_member_description}>великий и ужасный</p>
                </div>
                <div>
                    <img src={'/images/ourteam/rickSanches.png'}/>
                    <p className={styles.team_member_name}>Рик Санчес</p>
                    <p className={styles.team_member_description}>просто душка</p>
                </div>
            </div>
        </div>

    </div>
}