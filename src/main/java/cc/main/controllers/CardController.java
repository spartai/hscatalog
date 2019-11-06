package cc.main.controllers;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;





@RestController
@RequestMapping("cards")
public class CardController {
    @Autowired
    private CardRepository cardRepository;

    @GetMapping("/{id}")
    public ResponseEntity<Message> get(@PathVariable Long id) {
        Optional<Message> message = messageRepository.findById(id);
        if (!message.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(message.get());
    }
}
