package com.example.postsapi.controllers;


import com.example.postsapi.models.Post;
import com.example.postsapi.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PostsController {

    @Autowired
    private PostRepository postRepository;

    @GetMapping("/posts")
    public Iterable<Post> findAllPosts() {
        return postRepository.findAll();
    }
    @GetMapping("/posts/{postId}")
    public Post findPostById(@PathVariable Long postId) {
        return postRepository.findOne(postId);
    }

    @PostMapping("/posts")
    public Post createPost(@PathVariable Post post){
        return postRepository.save(post);
    }

    @DeleteMapping("/posts/{postId}")
    public HttpStatus deletePost(@PathVariable Long postId){
        postRepository.delete(postId);
        return HttpStatus.OK;
    }

    @PutMapping("/posts/{postId}")
    public Post updatePost(@PathVariable Long postId, @RequestBody Post postRequest){
        Post postFromDb = postRepository.findOne(postId);
        postFromDb.setTitle(postRequest.getTitle());
        postFromDb.setPost(postRequest.getPost());
        return postRepository.save(postFromDb);
    }
}