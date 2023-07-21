<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManager;
use Doctrine\Persistence\ObjectManager;
use Symfony\Bridge\Doctrine\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Doctrine\ORM\EntityManagerInterface;



class HomeController extends AbstractController
{

   

    #[Route('/home', name: 'home')]
    public function home(EntityManagerInterface $manager, UserPasswordHasherInterface $passwordHasher): Response
    {
        $user = new User();
        $user->setUsername('admin2');
        $hashedPassword = $passwordHasher->hashPassword(
            $user,
            12345678
        );
        $user->setPassword($hashedPassword);

        $user->setFullName('Admin');
        $user->setCreatedAt(new \DateTimeImmutable());

        $manager->persist($user);
        $manager->flush();

        return $this->render('Good');
    }

    #[Route('/', name: 'app_home')]
    public function index(): Response
    {
        // return $this->redirectToRoute('login');
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
            'appName' => 'React'
        ]);
    }

    #[Route('/login', name: 'login')]
    public function login(): Response
    {
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
            'appName' => 'React'
        ]);
    }

    #[Route('/products', name: 'products')]
    public function products(): Response
    {
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
            'appName' => 'React'
        ]);
    }

    #[Route('admin/login', name: 'adminLogin')]
    public function AdminLogin(): Response
    {
        return $this->render('admin/auth/login.html.twig', [
            'controller_name' => 'HomeController',
            'appName' => 'React'
        ]);
    }
}
