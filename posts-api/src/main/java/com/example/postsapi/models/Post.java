package com.example.postsapi.models;

import lombok.*;
import javax.persistence.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter @Entity
@Table(name = "POSTS")
public class Post {

    public Post(String title, String post, Long userId){
        this.title = title;
        this.post = post;
        this.userId = userId;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "TITLE")
    private String title;

    @Column(name = "POST")
    private String post;

    @Column(name = "USER_ID")
    private Long userId;

}