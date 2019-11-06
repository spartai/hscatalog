package cc.main.entities;

import lombok.Getter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.persistence.*;



@Entity     // marks class as a persistable entity
@Table(name = "users")  // optional -- lets you set the name of table, different from default
public class User extends BaseEntity {
    @Getter // generates getter for field
    @NotNull
    private String email;

    @Getter
    @NotNull
    private String username;

    @Getter
    @ElementCollection(fetch = FetchType.EAGER) // ??
    @Enumerated(EnumType.STRING)    // makes sure field is stored as string in database
    @NotNull
    private Enum<UserRole> role;



    public User(Long id, String email, String username, Enum<UserRole> role) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.role = role;
    }

    private User() {}   // elvileg ez a hibernatenek kell
}
