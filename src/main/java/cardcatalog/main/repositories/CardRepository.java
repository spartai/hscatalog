package cardcatalog.main.repositories;

import cardcatalog.main.entities.Card;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CardRepository extends CrudRepository<Card, Long> {
    Optional<Card> findByName(String name);


    List<Card> findAllByMana (Integer mana);

    List<Card> findAllByDamage (Integer damage);

    List<Card> findAllByHp (Integer hp);

    List<Card> findAllByCardClass (String cardClass);
}
