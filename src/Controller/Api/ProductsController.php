<?php

namespace App\Controller\Api;

use App\Repository\ProductsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use App\Entity\Products;

class ProductsController extends AbstractController
{
    #[Route('/api/products', name: 'app_api_products')]
    public function index(ProductsRepository $ProductsRepository): Response
    {
        $products = $ProductsRepository->findAll();
        if (!$products) {
            return $this->json([], Response::HTTP_NO_CONTENT);
        }

        /** @var Serializer $serializer */
        $serializer = new Serializer([new ObjectNormalizer()]);
        $jsonData = $serializer->normalize($products, 'json');

        return $this->json($jsonData, Response::HTTP_OK);
    }

    #[Route('/api/product/{productId}', name: 'api_product_detail', methods: ['GET'])]
    public function detail(string $productId, ProductsRepository $productRepository): Response
    {
        /** @var Products $products */
        $products = $productRepository->find($productId);

        if (!$products) {
            return $this->json([], Response::HTTP_NO_CONTENT);
        }

        /** @var Serializer $serializer */
        $serializer = new Serializer([new ObjectNormalizer()]);
        $jsonData = $serializer->normalize($products, 'json');

        return $this->json($jsonData, Response::HTTP_OK);
    }
}
