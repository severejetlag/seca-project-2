package com.example.postsapi.controllers;


import com.example.postsapi.models.Post;
import com.example.postsapi.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PostsController {

    @Autowired
    private PostRepository postRepository;

    @GetMapping("/posts")
    public List<Post> findAllPosts() {
        return postRepository.findAllPostsWithUsers();
    }
//    @GetMapping("/users/{postId}")
//    public Post findUserById(@PathVariable Long userId) {
//        return postRepository.findOne(userId);
//    }
}