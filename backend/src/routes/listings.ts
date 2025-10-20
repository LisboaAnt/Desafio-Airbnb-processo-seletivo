import { Router, Request, Response } from 'express';
import { mockListings, mockListingDetail, mockReviews } from '../data/mockData';

const router = Router();

// GET /api/listings - Retorna todas as listagens
router.get('/', (req: Request, res: Response) => {
  try {
    const { location, minPrice, maxPrice, rating } = req.query;
    
    let filteredListings = [...mockListings];

    // Filtrar por localização
    if (location && typeof location === 'string') {
      filteredListings = filteredListings.filter(listing =>
        listing.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    // Filtrar por preço mínimo
    if (minPrice && typeof minPrice === 'string') {
      filteredListings = filteredListings.filter(
        listing => listing.price >= parseInt(minPrice)
      );
    }

    // Filtrar por preço máximo
    if (maxPrice && typeof maxPrice === 'string') {
      filteredListings = filteredListings.filter(
        listing => listing.price <= parseInt(maxPrice)
      );
    }

    // Filtrar por rating
    if (rating && typeof rating === 'string') {
      filteredListings = filteredListings.filter(
        listing => listing.rating >= parseFloat(rating)
      );
    }

    res.json({
      success: true,
      data: filteredListings,
      total: filteredListings.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar listagens',
      error: error instanceof Error ? error.message : 'Erro desconhecido'
    });
  }
});

// GET /api/listings/:id - Retorna uma listagem específica
router.get('/:id', (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Para o exemplo, sempre retornamos os detalhes mockados
    // Em produção, você buscaria pelo ID específico
    const listing = { ...mockListingDetail, id };

    if (!listing) {
      return res.status(404).json({
        success: false,
        message: 'Listagem não encontrada'
      });
    }

    res.json({
      success: true,
      data: listing
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar listagem',
      error: error instanceof Error ? error.message : 'Erro desconhecido'
    });
  }
});

// GET /api/listings/:id/reviews - Retorna reviews de uma listagem
router.get('/:id/reviews', (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { limit = '10', offset = '0' } = req.query;

    const limitNum = parseInt(limit as string);
    const offsetNum = parseInt(offset as string);

    const paginatedReviews = mockReviews.slice(offsetNum, offsetNum + limitNum);

    res.json({
      success: true,
      data: paginatedReviews,
      total: mockReviews.length,
      limit: limitNum,
      offset: offsetNum
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar reviews',
      error: error instanceof Error ? error.message : 'Erro desconhecido'
    });
  }
});

export default router;
