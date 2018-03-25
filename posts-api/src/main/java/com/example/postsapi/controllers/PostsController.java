package com.example.postsapi.controllers;


import com.example.postsapi.models.Post;
import com.example.postsapi.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PostsController {

    @Autowired
    private PostRepository postRepository;

    @GetMapping("/posts")
    public Iterable<Post> findAllPosts() {
        return postRepository.findAll();
    }
}