package cardcatalog.main.repositories;

import cardcatalog.main.entities.UserRole;
import cardcatalog.main.entities.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    Optional<User> findByUsername (String username);
    Optional<User> findByEmail (String email);


    List<User> findAllByRole (UserRole role);




}