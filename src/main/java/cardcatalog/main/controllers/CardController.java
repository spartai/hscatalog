package cardcatalog.main.controllers;

import cardcatalog.main.entities.Card;
import cardcatalog.main.repositories.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
@CrossOrigin
@RequestMapping("card")
public class CardController {

    @Autowired
    private CardRepository cardRepository;

    @GetMapping("")
    public ResponseEntity<Iterable<Card>> getAll(){
        return new ResponseEntity(cardRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Card> get(@PathVariable Long id){
        Optional<Card> card = cardRepository.findById(id);
        if (!card.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(card.get());
    }

    @GetMapping("/mana/{mana}")
    public ResponseEntity<Iterable<Card>> getAllByMana(@PathVariable Integer mana){
        return new ResponseEntity(cardRepository.findAllByMana(mana), HttpStatus.OK);
    }

    @GetMapping("/damage/{damage}")
    public ResponseEntity<Iterable<Card>> getAllByDamage(@PathVariable Integer damage){
        return new ResponseEntity(cardRepository.findAllByDamage(damage), HttpStatus.OK);
    }

    @GetMapping("/hp/{hp}")
    public ResponseEntity<Iterable<Card>> getAllByHp(@PathVariable Integer hp){
        return new ResponseEntity(cardRepository.findAllByHp(hp), HttpStatus.OK);
    }

    @GetMapping("/class/{cardClass}")
    public ResponseEntity<Iterable<Card>> getAllByClass(@PathVariable String cardClass){
        return new ResponseEntity(cardRepository.findAllByCardClass(StringUtils.capitalize(cardClass)), HttpStatus.OK);
    }

    // put
    @PutMapping("/{id}")
    public ResponseEntity<Card> update(@PathVariable Long id, @RequestBody Card card) {
        Optional<Card> oCard = cardRepository.findById(id);
        if (oCard.isPresent()) {
            card.setId(id);
            return ResponseEntity.ok(cardRepository.save(card));
        }
        return ResponseEntity.notFound().build();
    }

    // post
    @PostMapping("")
    public ResponseEntity<Card> post(@RequestBody Card card) {
        return ResponseEntity.ok(cardRepository.save(card));
    }

    // delete
    @DeleteMapping("/{id}")
    public ResponseEntity<Card> delete(@PathVariable Long id) {
        Optional<Card> card = cardRepository.findById(id);
        if (!card.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        cardRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
