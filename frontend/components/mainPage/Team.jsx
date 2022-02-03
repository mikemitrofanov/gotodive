import styles from "./styles/team.module.css";
import MemberCard from "./components/MemberCard";
import Container from "@/components/shared/Container";
import container_styles from "@/components/shared/styles/container.module.css";
import {useTranslation} from "next-i18next";
export default function Team({title, teamMembers = []}) {
    const {t, i18n} = useTranslation("members");

    return (
        <>
            <Container background={styles.title_section_background}  container={container_styles.flex}>
                <h2 className={styles.title}>{title}</h2>
            </Container>
            <Container background={styles.background} container={container_styles.container}>
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
        </>
    )
}
