import styles from "./styles/team.module.css";
import MemberCard from "./components/MemberCard";
import Container from "@/components/shared/Container";

export default function Team({title, teamMembers}) {

    return (
        <Container container={styles.container} background={styles.background}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.card_list}>
                {teamMembers.map(member => (
                    <MemberCard
                        key={member.id}
                        src={member.photo}
                        name={member.name}
                        description={member.description}
                    />
                ))}
            </div>
        </Container>
    )
}
