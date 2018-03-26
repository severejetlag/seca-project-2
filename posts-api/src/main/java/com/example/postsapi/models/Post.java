package com.example.postsapi.models;

import lombok.*;
import javax.persistence.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter @Entity
@Table(name = "POSTS")
public class Post {

    public Post(String title, String post, User user){
        this.title = title;
        this.post = post;
        this.user = user;
    }

    @Id
    @Column(name = "ID", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "TITLE")
    private String title;

    @Column(name = "POST")
    private String post;

    @ManyToOne(optional=false)
    @JoinColumn(name="USER_ID",referencedColumnName="ID")
    private User user;


}