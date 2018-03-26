package com.example.postsapi.repositories;

import com.example.postsapi.models.Post;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PostRepository extends CrudRepository<Post, Long> {

//    @Query(value = "SELECT p.title, p.post, u.user_name FROM Posts p JOIN Users u ON p.user_id = u.id;")
//    List<Post> findAllPostsWithUsers();

    @Query("SELECT p.id, p.title, p.post, p.user FROM Post p")
    List<Post> findAllPostsWithUsers();
}