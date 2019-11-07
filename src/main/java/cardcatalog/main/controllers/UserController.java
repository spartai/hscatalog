package cardcatalog.main.controllers;

import cardcatalog.main.entities.Role;
import cardcatalog.main.entities.User;
import cardcatalog.main.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("user")
public class UserController {
    /*
        Ezeket szerintem csak adminok részére kéne elérhetővé tenni (mondjuk igazából se mellette, se
        ellene nem szól érvem.... A userek csak a sajátjukat tudják elérni
     */

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/all-users")
    public ResponseEntity<Iterable<User>> getAllUsers() {
        return new ResponseEntity(userRepository.findAllByRole(Role.USER), HttpStatus.OK);
    }

    @GetMapping("/all-admins")
    public ResponseEntity<Iterable<User>> getAllAdmins() {
        return new ResponseEntity(userRepository.findAllByRole(Role.ADMIN), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> get(@PathVariable Long id) {
        Optional<User> user = userRepository.findById(id);
        if (!user.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(user.get());
    }

    @GetMapping("/username/{username}")
    public ResponseEntity<User> get(@PathVariable String username) {
        Optional<User> user = userRepository.findByUsername(username);
        if (!user.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(user.get());
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<User> getByEmail(@PathVariable String email) { //??
        Optional<User> user = userRepository.findByEmail(email);
        if (!user.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(user.get());
    }

}