import styles from "./styles/team.module.css";
import MemberCard from "./components/MemberCard";
import Container from "@/components/shared/Container";
import {useTranslation} from "next-i18next";


export default function Team({title, teamMembers = []}) {
    const {t, i18n} = useTranslation("members");

    return (
        <Container container={styles.container} background={styles.background}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.card_list}>
                {teamMembers.map(member => (
                 
                    <MemberCard
                        key={member.id}
                        src={member.photo}
                        name={t(`name.${member.id}`)}
                        description={t(`description.${member.id}`)}
                    />
                ))}
            </div>
        </Container>
    )
}
