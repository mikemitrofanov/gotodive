import {useTranslation} from "next-i18next";
import styles from "./team.module.css";
import {teamMembers} from "./data";
import MemberCard from "./items/MemberCard";

export default function Team() {
    const {t} = useTranslation("common");

    return (
        <section className={styles.background}>
            <div className={styles.container}>
                <h2 className={styles.title}>{t("team.ourTeam")}</h2>
                <div className={styles.card_list}>
                    {teamMembers.map(member => (
                        <MemberCard
                            key={member.id}
                            src={member.photo}
                            name={t(member.name)}
                            description={t(member.description)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
